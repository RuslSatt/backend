import express from 'express';
import { userRouter } from './routes/user.router.js';

const PORT = 8000;

const app = express();

app.use(express.json());

app.use('/', userRouter);

app.listen(PORT, () => {
    console.log('Server started');
});
