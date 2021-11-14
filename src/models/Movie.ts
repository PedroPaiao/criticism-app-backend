import { DataTypes, Model } from "sequelize";

import connection from '../database/index'
import Criticizes from "./Criticize";

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

// Movie.hasMany(Criticizes, 
//   {foreignKey : 'Criticizes_id', 
//   onDelete: 'CASCADE', 
//   onUpdate: 'CASCADE'
// });

export default Movie;
