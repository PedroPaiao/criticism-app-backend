import { DataTypes, Model } from "sequelize";
import { Request } from 'express';
import connection from '../database/index';

class User extends Model {

  toJSON () {
    // hide password on responses
    let attributes = Object.assign({}, this.get());
    for (let a of ['password']) {
      delete attributes[a];
    }
    return attributes;
  }  

  async findByEmail(req: Request) {
    const users = await User.findAll();
    
    return new Promise<any>( (resolve) => resolve(
      users.find( (user: User) => user.get('email') === req.body.email ),
    ));
  } 
}

User.init({
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING
},
{
  sequelize: connection,
  modelName: 'User'
});

export default User;