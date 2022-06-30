const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type:String, required:true, unique:true
    },
    gender:{
  type:String, required:true
    },
    country:{
        type:String, required:true
    },
    device:{
        type:String, required:true
    }
})
module.exports = mongoose.model('Users', userSchema)
