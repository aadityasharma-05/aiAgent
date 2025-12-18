import express from 'express';
import  'dotenv/config';
import morgan from 'morgan';
import conntionDb from './db/db.js';
import userRoutes from './routes/user.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';



conntionDb();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.use(morgan('dev'));


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser())

app.use('/users', userRoutes);

app.use('/', (req, res) => {
  res.send('API is running...');
});
export default app;