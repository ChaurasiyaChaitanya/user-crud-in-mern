const express = require('express');
const User = require('../models/user')
 
const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
 
    let username = req.query.username;
    let password = req.query.password
    let data;
 
    if(username && password) {
        data = await User.find({username, password});
        console.log(data);
    } else {
        data = await User.find({});
    }
    if(username && password && data) {
        res.status(200).json(data);
    } else if (data) {
        res.status(200).json(data);
    } else {
        res.status(400).json("No data found!");
    }
});


userRouter.post('/', async (req,res) => {
    const user = new User(req.body);
    const data = await user.save();
 
    res.status(201).json(data);
});


userRouter.delete('/:id', async (req,res) => {
    const userId = req.params.id;
    const userData = await User.findById(userId);
 
    if(userData) {
        await User.findByIdAndDelete(userId, userData);
        res.status(200).json("User data Deleted successfully!");
    } else {
        res.status(400).json("No data found to perform Delete operation!");
    }
});


module.exports = userRouter;