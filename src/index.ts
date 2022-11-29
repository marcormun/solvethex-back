import express, { Express } from 'express';

require('dotenv').config();

const app: Express = express();

//middleware
app.use(express.json());

//port
const PORT = process.env.PORT || 4000;

app.get('/',(req, res) =>{
    res.send('Its working')
})

app.listen(PORT, () => {
    console.log("Served started at PORT " + PORT)
})