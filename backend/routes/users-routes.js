const express = require('express');
const User = require('../models/user')
 
const userRouter = express.Router();

userRouter.get('/', async (req,res) => {
    res.status(200).json("This is user auth route");
})


userRouter.post('/', async (req,res) => {
    const user = new User(req.body);
    const data = await user.save();
 
    res.status(201).json(data);
});


module.exports = userRouter;