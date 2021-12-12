import express from 'express';
import "reflect-metadata";
import "./database";
import { router } from './routes';

const app = express();
app.use(express.json())

 app.use(router);

//https://localhost:300
app.listen(3000, () => { console.log(" Server is running NLW") });

