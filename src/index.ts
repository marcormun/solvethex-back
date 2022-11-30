import express, { Express } from 'express';


const sequelize = require('./db/database');

//start the database
sequelize.sync().then(() => console.log("DB working"))

require('dotenv').config();

const app: Express = express();

//middleware
app.use(express.json());

//port
const PORT = process.env.PORT || 4000;

app.get('/',(req, res) =>{
    res.status(200).json({success : true});
})

app.listen(PORT, () => {
    console.log("Served started at PORT " + PORT)
})

//db
