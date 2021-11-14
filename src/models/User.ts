import { DataTypes, Model } from "sequelize";
import connection from '../database/index';
import Criticizes from "./Criticize";

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

User.hasMany(Criticizes, 
  {foreignKey : 'Criticizes_id', 
  onDelete: 'CASCADE', 
  onUpdate: 'CASCADE'
});

export default User;