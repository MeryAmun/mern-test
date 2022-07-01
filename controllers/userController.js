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

const getAllUsers = async (req, res) => {
const allUsers = await User.find()
res.status(200).json({ allUsers})
}
module.exports = {
    createNewUser, getAllUsers
}