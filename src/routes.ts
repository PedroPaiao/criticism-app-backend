import express, { request, response } from 'express';
import MoviesController from './controllers/MoviesController'
import UsersController from './controllers/UsersController';

const routes = express.Router();

const moviesController = new MoviesController;
const usersController = new UsersController;

routes.get('/', (request, response) => {
  response.send('Hello World!')
});

routes.post('/movies', moviesController.store)
routes.get('/movies', moviesController.index)
routes.delete('/movies/:id', moviesController.delete)
routes.put('/movies/:id', moviesController.update)

routes.get('/users', usersController.index)
routes.get('/users/:id', usersController.show)
routes.post('/users', usersController.store)
routes.put('/users/:id', usersController.update)
routes.delete('/users/:id', usersController.delete)

export default routes;