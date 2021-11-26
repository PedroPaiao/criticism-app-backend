import { Response, Request } from 'express';
import User from '../models/User';
import { v4 as uuid  } from 'uuid';

const serializer = require('express-serializer');

import UserSerializer from '../serializers/UserSerliazer';
import Criticize from '../models/Criticize';

const bcrypt = require('bcryptjs');

class UsersController {

  async index(req: Request, res: Response) {
    const users = await User.findAll();    
    const options = { except: 'password' }
    serializer(req, users, UserSerializer, options).then((json: Object) => {
      return res.send(json)
    })
  }

  async show(req: Request, res: Response) {
    const { id } = req.params
    const user = await User.findByPk(id, { include: Criticize })

    if (!user) { return res.json({ error: "User not found!" }) }
    const options = { except: ['password'] }
    serializer(req, user, UserSerializer, options).then((json: Object) => {
      return res.send(json)
    })    
  }
  
  async store(req: Request, res: Response) {
    const { name, email, password, passwordconfirm } = req.body;    

    if(password != passwordconfirm)
      return res.status(422).json({ message: 'Password dont match' })

    const user = await User.findOne({ where: { email: email } });    
    if (user != null) { return res.sendStatus(422) }
    
    /* Salt its like a prefix to random new hashcode */ 
    try {
      const salt = await bcrypt.genSalt();
      const encrypted_password = await bcrypt.hash(password, salt);
      const user_token = uuid();
      const options = { except: ['password', 'token'] }
      const newUser = await User.create({ name, email, password: encrypted_password, token: user_token });

      serializer(req, newUser, UserSerializer, options).then((json: Object) => {
        return res.send(json)
      })
    } catch (error) {
      return res.json(error);
    }
  }

  async update(req: Request, res: Response) {
    const { name, email, password, password_confirmation } = req.body;
    const user = await User.findByPk(req.params.id);

    if (!user) { return res.status(404).json({ error: "User not found!" }) }

    if(password != password_confirmation)
      return res.status(422).json({ message: 'Password dont match' })

    const salt = await bcrypt.genSalt();
    const encrypted_password = await bcrypt.hash(password, salt);
    
    await user.update({ name, email, encrypted_password })
    return res.json(user)
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params
    let user = await User.findByPk(id)
    
    if (user == null) { return res.json({ error: "User not found!" })  }
    
    await user.destroy()

    user = await User.findByPk(id)
    if (user == null) { return res.json({ error: "Something wrong!" })  }

    return res.json({ sucess: "Success on delete"})
  }
}

export default UsersController;
