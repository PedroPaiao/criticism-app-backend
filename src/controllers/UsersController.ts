import { Response, Request } from 'express';
import User from '../models/User';

const bcrypt = require('bcryptjs');

class UsersController {

  async index(req: Request, res: Response) {
    const users = await User.findAll();

    return res.json(users)
  }

  async show(req: Request, res: Response) {
    const { id } = req.params
    const user = await User.findByPk(id)

    if (!user) { return res.json({ error: "User not found!" }) }

    return res.json(user)
  }
  
  async store(req: Request, res: Response) {
      
    //const emailExists = await User.findByEmail(email)
    //if (emailExists) { return     }
    
    try {
      const { name, email } = req.body;      
      const salt = await bcrypt.genSalt();
      const password = await bcrypt.hash(req.body.password, salt);
      console.log(salt)
      console.log(password)

      const user = await User.create({ name, email, password });
      return res.json(user);
      
    } catch {
      res.status(500).send('Something went wrong...')
    }

  }

  async update(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const id = req.params.id;
    const user = await User.findByPk(id);

    if (!user) { return res.json({ error: "User not found!" }) }
    
    await user.update({ name, email, password })
    return res.json(user)
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params
    const user = await User.findByPk(id)
    
    if (!user) { return res.json({ error: "User not found!" })  }
    
    await user?.destroy()
    return res.json({ sucess: "Success on delete"})
  }

  findByEmail(email: string) {

  }

}

export default UsersController;
