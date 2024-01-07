const express = require('express');
const User = require('../models/user')
 
const userRouter = express.Router();

userRouter.get('/', async (req,res) => {
    res.status(200).json("This is user auth route");
})


module.exports = userRouter;