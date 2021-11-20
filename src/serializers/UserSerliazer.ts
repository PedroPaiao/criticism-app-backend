import { Request } from 'express';
import User from '../models/User';

export default function UserSerializer(req: Request, user: User, options: Object) {
  return {
    id: user.get('id'),
    name: user.get('name'),
    email: user.get('email'),
    password: user.get('password'),
    token: user.get('token'),
    created_at: user.get('createdAt'),
    updated_at: user.get('updatedAt')
  }
}