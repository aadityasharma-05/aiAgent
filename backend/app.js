import express from 'express';
import  'dotenv/config';
import morgan from 'morgan';
import conntionDb from './db/db.js';
import userRoutes from './routes/user.routes.js';



conntionDb();

const app = express();

app.use(morgan('dev'));


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes);

app.use('/', (req, res) => {
  res.send('API is running...');
});
export default app;