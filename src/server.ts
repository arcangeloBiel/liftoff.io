import express, {Request, Response, NextFunction} from 'express';
import "reflect-metadata";
import "./database";
import { router } from './routes';
import "express-async-errors"
import cors from "cors";

const app = express();

app.use(express.json())
app.use(router);
app.use(cors());

/** 
 * middleware são interceptores
*/
app.use((err: Error, req: Request, res: Response, next: NextFunction) => { 

    if(err instanceof Error) {
       return res.status(400).json({error: err.message});
    }

    return res.status(500).json({status: "error", message: "Internal Server Error"});

});


//https://localhost:300
app.listen(3000, () => { console.log(" Server is running NLW") });

