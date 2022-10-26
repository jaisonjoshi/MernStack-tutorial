require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const packageRoutes = require('./routes/packages')

const app = express();


app.use(express.json())

app.use('/api/packages', packageRoutes)

mongoose.connect(process.env.MONGO)
    .then(()=>{
        app.listen(4000, ()=>{
            console.log("connected to backend and listening to port 4000")
        })
    })
    .catch((err) => {
        console.log(err);
    })