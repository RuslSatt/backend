import { Router } from 'express';
import UserController from '../controllers/user.controller.js';

export const userRouter = new Router();

userRouter.post('/user', UserController.create);
userRouter.get('/user', UserController.get);
userRouter.get('/user/:id', UserController.getById);
userRouter.put('/user', UserController.put);
userRouter.delete('/user/:id', UserController.delete);
