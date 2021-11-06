import express, { Request, Response } from 'express';

import AuthContoller from './controllers/AuthController';
import MoviesController from './controllers/MoviesController';
import UsersController from './controllers/UsersController';
import verifyJWT from './middlewares/verifyJWT';

const routes = express.Router();

const moviesController = new MoviesController;
const usersController = new UsersController;
const authController = new AuthContoller;

routes.get('/', (request: Request, response: Response) => {
  response.send('Hello World!')
});

routes.post('/movies', moviesController.store)
routes.get('/movies', moviesController.index)
routes.delete('/movies/:id', moviesController.delete)
routes.put('/movies/:id', moviesController.update)

routes.get('/users', verifyJWT, usersController.index)
routes.get('/users/:id', usersController.show)
routes.post('/users', usersController.store)
routes.put('/users/:id', usersController.update)
routes.delete('/users/:id', usersController.delete)

routes.post('/users/login', authController.handleLogin)
/*logout?*/



export default routes;