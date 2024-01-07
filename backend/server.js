const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/users-routes');
const app = express();
 
app.use(bodyParser.json());
app.use(cors());
 
app.use('/users', userRoutes);
 
mongoose
    .connect()  // add URL for mongo db connection
    .then(() => {
        console.log('Connected to Database!');
        app.listen(5000);
    })
    .catch(err => {
        console.log('Connection failed!' + err);
    });