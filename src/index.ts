import express, { Express } from 'express';

const app: Express = express();
app.use(express.json());

const PORT = 8000;

app.get('/',(req, res) =>{
    res.send('Its working')
})

app.listen(PORT, () => {
    console.log("Served started at PORT 8000")
})