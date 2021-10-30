import express from 'express';
import routes from './routes'

const app = express()
const PORT : string|number = process.env.PORT || 5000;

app.use(express.json());
app.use(routes);
app.use("*",(req, res) =>{
    res.send("<h1>Welcome to your simple server! Awesome right</h1>");
});

app.listen(PORT,() => console.log(`hosting @${PORT}`));
