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