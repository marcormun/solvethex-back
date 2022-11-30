import express from 'express';

import userRouter from './routes/users';

const app = express();


//middleware
app.use(express.json());

require('dotenv').config();

const sequelize = require('./db/database');

//start the database
sequelize.sync().then(() => console.log("DB working"))

//port
const PORT = process.env.PORT || 4000;

app.get('/',(req, res) =>{
    res.status(200).json({success : true});
})

app.use('/api/users', userRouter);

app.listen(PORT, () => {
    console.log("Served started at PORT " + PORT)
})

