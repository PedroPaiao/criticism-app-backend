import { DataTypes, Model } from "sequelize";
import Movie from './Movie';
import User from './User';
import connection from '../database/index'

class Criticizes extends Model {}

Criticizes.init({
  description: DataTypes.STRING,
  rate: DataTypes.DECIMAL
}, {
  sequelize: connection,
  modelName: 'Criticizes',
})

// Criticizes.belongsTo(Movie);
// Criticizes.belongsTo(User);

module.exports = Criticizes;
export default Criticizes;
