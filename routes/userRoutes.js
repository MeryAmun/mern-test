const express = require('express');
const { createNewUser, getAllUsers } = require('../controllers/userController');
const router = express.Router()


router.get('/users', getAllUsers)

router.post('/user', createNewUser)

module.exports  = router