import { JsonWebKey } from "crypto";
import { NextFunction, Request, Response } from "express";

const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJWT = (req: Request, res: Response, next: NextFunction ) => {
  const tokenHeader = req.headers['x-access-token']
  if (!tokenHeader) { return res.status(401).end() }
  console.log("token header = ", tokenHeader);  

  jwt.verify(
    tokenHeader,
    process.env.ACCESS_TOKEN_SECRET,
    (error: String , decoded: JsonWebKey) => {
      //console.log("decoded: ", decoded, typeof(decoded))      
      if (error) { return res.status(403).end() }
      
      req.body.email = decoded.userEmail;
      next();

  });
}

export default verifyJWT;
