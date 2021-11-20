import { Request, Response } from "express";
import User from '../models/User';

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class AuthContoller {
  
  async handleLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    
    if (email == null || password == null) {
      return res.status(400).json({ message: 'Username and password are required!' });
    }

    const user = await User.findOne({ where: { email:  email} });
    
    if (user == null) {
      return res.status(401).send({ message: 'Unathorized user' });
    }

    const match = await bcrypt.compare(password, user.get('password'));
    if (match) {
      // create JWTs
      const acessToken = jwt.sign(
        { "userEmail": user.get('email') },
        user.get('token'),
        { expiresIn: '1d' }
      );      

      res.cookie('jwt', acessToken, { httpOnly: true, maxAge: 24*60*60*1000} );
      return res.json({
        message : `Success! User ${user.get('email')} is logged in.`,
        user : {
          id: user.get('id'),
          name: user.get('name'),
          email: user.get('email'),
          acessToken
        }
      });
    }
    
    return res.status(401).send({ message: 'Unathorized user. Credentials dont match!' })

  }
}

export default AuthContoller;