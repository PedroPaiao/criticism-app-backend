import { DataTypes, Model } from "sequelize";
import Movie from './Movie';
import User from './User';
import connection from '../database/index'

class Criticize extends Model {}

Criticize.init({
  description: DataTypes.STRING,
  rate: DataTypes.DECIMAL,
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    }
  },
  movie_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Movie,
      key: 'id',
    }
  },
}, {
  sequelize: connection,
  modelName: 'Criticize',
})

Movie.hasMany(Criticize,
{
  foreignKey: 'movie_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

Criticize.belongsTo(Movie)

export default Criticize;
