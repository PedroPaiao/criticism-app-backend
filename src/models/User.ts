import { DataTypes, Model } from "sequelize";
import connection from '../database/index';

class User extends Model {}

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