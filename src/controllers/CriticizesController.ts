import { Response, Request } from 'express'
import Criticize from '../models/Criticize';
import Movie from '../models/Movie';
import User from '../models/User';

class CriticizesController {
  async store(req: Request, res: Response) {
    let { movie_id } = req.params
    const { description, rate } = req.body;
    const user_id = req.headers.userid;    
    let user;

    if (user_id != undefined) {
      user = await User.findByPk(user_id.toString())
    }
    if(user == null) return res.status(404).json({ message: 'User not found' })

    const criticize = await Criticize.create({user_id, description, rate, movie_id })

    return res.json(criticize);
  }
  async index(req: Request, res: Response) {
    const criticizes = await Criticize.findAll();

    return res.json(criticizes)
  }

  async index_by_movie(req: Request, res: Response) {
    let movie = await Movie.findByPk(req.params.movie_id)
    if(movie == null) return res.status(404).json({ message: 'Movie not found' })
    const criticizes = await Criticize.findAll(
      { where: { movie_id: movie.get('id') }, include: User }
    );

    return res.json(criticizes)
  }

  async index_by_user(req: Request, res: Response) {
    let user = await User.findByPk(req.params.user_id)
    if(user == null) return res.status(404).json({ message: 'User not found' })
    
    const criticizes = await Criticize.findAll(
      { where: { user_id: user.get('id') } }
    );

    return res.json(criticizes)
  }

  async delete(req: Request, res: Response) {
    const id = req.params.criticize_id
    const criticize = await Criticize.findByPk(id)
    
    if (criticize) {
      let user_id = await criticize.get('user_id')
      if (user_id != req.headers.userid) return res.status(401).json(
          { message: 'Unautorized function' }
        )
      
      await criticize.destroy()
      return res.json({ success: "Success on delete" })
    } else {
      return res.status(404).json({ message: 'Criticize dont founded' })
    }
  }

  async update(req: Request, res: Response) {
    const { user, description,rate } = req.body;
    const id = req.params.id
    const criticize = await Criticize.findByPk(id)
    
    if(criticize == null) return res.json({ error: "Not found error" })

    await criticize.update({ user, description, rate })

    return res.json(criticize)
  }
}

export default CriticizesController;