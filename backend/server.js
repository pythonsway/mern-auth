import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';

import connectDB from './config/db.js';
import { errorHandler, notFound } from './middleware/errorMiddlewere.js';
import userRoutes from './routes/userRouts.js';

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/users', userRoutes);
if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(process.cwd(), 'frontend/dist');
  app.use(express.static(distPath));
  app.get('*', (req, res) => res.sendFile(path.resolve(distPath, 'index.html')));
} else {
  app.get('/', (req, res) => res.send('ready'));
}
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`server at ${port}`));