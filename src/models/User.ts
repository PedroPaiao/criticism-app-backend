import { DataTypes, Model } from "sequelize";
import connection from '../database/index';
import Criticize from "./Criticize";

class User extends Model {}

User.init({
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  token: DataTypes.STRING
},
{
  sequelize: connection,
  modelName: 'User'
});

User.hasMany(Criticize,
  {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  });

Criticize.belongsTo(User)

export default User;