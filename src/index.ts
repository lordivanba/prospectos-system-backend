import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import {createConnection} from 'typeorm'

import prospectoRoutes from './routes/prospecto.routes'

const app = express();
createConnection();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use("/api",prospectoRoutes);

app.listen(3000);
console.log('Server on port', 3000);