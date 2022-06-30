const mongoose = require('mongoose');
const User = require('../model/userModel')


const createNewUser = async (req, res) => {
const { username, gender, country, device } = req.body
    let existingUser =  await User.findOne({username})

    if(existingUser){
        res.status(400).json({message:'User already exists'})
    }
       
    const newUser = await User.create({
            username,
            gender,
            country,
            device
        })
    res.status(402).json({newUser})
}
module.exports = {
    createNewUser
}