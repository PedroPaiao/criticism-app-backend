import { Response, Request } from 'express'
import { where } from 'sequelize/types';

import Criticizes from '../models/Criticize';
import Movie from '../models/Movie';
import User from '../models/User';

class CriticizesController {
  async store(req: Request, res: Response) {
    let { movie_id } = req.params
    const { description, rate } = req.body;
    const user_id = req.headers.user_id;
    let user;

    if (user_id != undefined) {
      user = await User.findByPk(user_id.toString())
    }
    if(user == null) return res.status(404).json({ message: 'User not found' })

    const criticize = await Criticizes.create({user_id, description, rate, movie_id })

    return res.json(criticize);
  }
  async index(req: Request, res: Response) {
    const criticizes = await Criticizes.findAll();

    return res.json(criticizes)
  }

  async index_by_movie(req: Request, res: Response) {
    let movie = await Movie.findByPk(req.params.movie_id)
    if(movie == null) return res.status(404).json({ message: 'Movie not found' })
    const criticizes = await Criticizes.findAll(
      { where: { movie_id: movie.get('id') }, include: User }
    );

    return res.json(criticizes)
  }

  async index_by_user(req: Request, res: Response) {
    let user = await User.findByPk(req.params.user_id)
    if(user == null) return res.status(404).json({ message: 'User not found' })
    
    const criticizes = await Criticizes.findAll(
      { where: { user_id: user.get('id') } }
    );

    return res.json(criticizes)
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id
    const criticizes = await Criticizes.findByPk(id)
    await criticizes?.destroy()

    return res.json({ success: "Success on delete" })
  }

  async update(req: Request, res: Response) {
    const { user, description,rate } = req.body;
    const id = req.params.id
    const criticizes = await Criticizes.findByPk(id)
    
    if(criticizes == null) return res.json({ error: "Not found error" })

    await criticizes.update({ user, description, rate })

    return res.json(criticizes)
  }
}

export default CriticizesController;