import { Response, Request } from 'express'

import Movie from '../models/Movie'

class MoviesController {
  async store(req: Request, res: Response) {
    const { name, description, category, image_link, trailler_link, director,  year } = req.body;
    const movie = await Movie.create({ name, description, category, image_link, trailler_link, director,  year })

    return res.json(movie);
  }
  async index(req: Request, res: Response) {
    const movies = await Movie.findAll();

    return res.json(movies)
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id
    const movie = await Movie.findByPk(id)
    await movie?.destroy()

    return res.json({ success: "Success on delete" })
  }

  async update(req: Request, res: Response) {
    const { name, description, category, image_link, trailler_link, director,  year } = req.body;
    const id = req.params.id
    const movie = await Movie.findByPk(id)
    
    if(movie == null) return res.json({ error: "Not found error" })

    await movie.update({ name, description, category, image_link, trailler_link, director,  year })

    return res.json(movie)
  }
}

export default MoviesController;