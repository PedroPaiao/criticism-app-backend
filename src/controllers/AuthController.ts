import { Request, Response } from "express";
import User from '../models/User';

const bcrypt = require('bcryptjs');

class AuthContoller {

  async handleLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    
    if (email == null || password == null) {
      return res.status(400).json({ message: 'Username and password are required!' })    
    }

    const user = await User.findOne({ where: { email:  email} })
    
    if (user == null) {
      return res.status(401).send({ message: 'Unathorized user' })
    }

    const match = await bcrypt.compare(password, user.get('password'))
    if (match) {
      // create JWTs
      return res.json({ message : `Succes! User ${user.get('email')} is logged in.` })
    }
    
    return res.status(401).send({ message: 'Unathorized user. Credentials dont match!' })

  }
}

export default AuthContoller;