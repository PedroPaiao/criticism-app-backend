import { JsonWebKey } from "crypto";
import { LocalStorage } from "node-localstorage";
import { NextFunction, Request, Response } from "express";
import User from "../models/User";

const jwt = require('jsonwebtoken');
const localStorage = new LocalStorage('./scratch');

const verifyJWT = async (req: Request, res: Response, next: NextFunction ) => {
  const tokenHeader = req.headers['Authorization']
  if (!tokenHeader) { return res.status(401).end() }
  
  const userInStorage = localStorage.getItem("user");
  if (userInStorage != null) {
    const user = await User.findByPk(JSON.parse(userInStorage).id);   
    console.log("user in local  storage:", user)
    jwt.verify(
      tokenHeader,
      user?.get('token'),
      (error: String , decoded: JsonWebKey) => {
        if (error) { return res.status(403).end() }
        
        req.body.email = decoded.userEmail;
        next();
        
      });
    }
}

export default verifyJWT;
