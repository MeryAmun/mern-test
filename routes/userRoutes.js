const express = require('express');
const { createNewUser } = require('../controllers/userController');
const router = express.Router()


router.get('/users', (req,res) => {

   res.send('All Users') 
})

router.post('/user', createNewUser)

module.exports  = router