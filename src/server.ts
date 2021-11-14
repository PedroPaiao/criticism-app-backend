import express, { NextFunction, Request, Response } from 'express';
import routes from './routes';
const cors = require('cors');

const app = express()
const PORT : string|number = process.env.PORT || 5000;

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});

app.use(routes);

app.use("*",(req, res) =>{
    res.send("<h1>Welcome to your simple server! Awesome right</h1>");    
});

app.listen(PORT,() => console.log(`hosting @${PORT}`));
