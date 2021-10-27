import express, { response } from 'express';
import MoviesController from './controllers/MoviesController'

const routes = express.Router();

const moviesController = new MoviesController;

routes.post('/movies', moviesController.store)
routes.get('/movies', moviesController.index)
routes.delete('/movies/:id', moviesController.delete)
routes.put('/movies/:id', moviesController.update)

export default routes;