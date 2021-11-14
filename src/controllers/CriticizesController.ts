import { Response, Request } from 'express'

import Criticizes from '../models/Criticize';

class CriticizesController {
  async store(req: Request, res: Response) {
    const { user, description,rate } = req.body;
    const movie = await Criticizes.create({ user, description, rate })

    return res.json(movie);
  }
  async index(req: Request, res: Response) {
    const criticizes = await Criticizes.findAll();

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