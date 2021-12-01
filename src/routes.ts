import express, { Request, Response } from 'express';

import AuthContoller from './controllers/AuthController';
import CriticizesController from './controllers/CriticizesController';
import MoviesController from './controllers/MoviesController';
import UsersController from './controllers/UsersController';
import verifyJWT from './middlewares/verifyJWT';

const routes = express.Router();

const moviesController = new MoviesController;
const usersController = new UsersController;
const authController = new AuthContoller;
const critizesController = new CriticizesController;

routes.get('/',verifyJWT, async (request: Request, response: Response) => {
  response.send('Hello World!')
});

routes.post('/movies', moviesController.store)
routes.get('/movies', moviesController.index)
routes.get('/movies/:id', moviesController.show)
routes.delete('/movies/:id', moviesController.delete)
routes.put('/movies/:id', moviesController.update)

routes.get('/users', usersController.index)
routes.get('/users/:id', usersController.show)
routes.post('/users', usersController.store)
routes.put('/users/:id', usersController.update)
routes.delete('/users/:id', usersController.delete)

routes.get('/criticizes', critizesController.index)
routes.post('/movies/:movie_id/criticizes', critizesController.store)
routes.delete('/criticizes/:criticize_id', critizesController.delete)
routes.put('/criticizes/:criticize_id', critizesController.update)
routes.get('/movies/:movie_id/criticizes', critizesController.index_by_movie)
routes.get('/users/:user_id/criticizes', critizesController.index_by_user)

routes.post('/login', authController.handleLogin)

export default routes;