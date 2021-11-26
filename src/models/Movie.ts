import { DataTypes, Model } from "sequelize";

import connection from '../database/index'
import Criticize from "./Criticize";

class Movie extends Model {}

Movie.init({
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  category: {
    type: DataTypes.ENUM,
    values: [
      'action',
      'commedy',
      'fiction',
      'terror',
      'trending',
    ]
  },
  image_link: DataTypes.STRING,
  trailler_link: DataTypes.STRING,
  director: DataTypes.STRING,
  year: DataTypes.DATE,
}, {
  sequelize: connection,
  modelName: 'Movie',
})

export default Movie;
