const express = require('express');
const connectDb = require('./db/dbConfig')
const dotenv = require('dotenv')
const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send('This is the home page, welcome!')
})

let PORT = 3500;
const host = '0.0.0.0'
const server = async () => {
try {
   await connectDb(process.env.REACT_TEST_DB).then(() => {
       if (PORT == null || PORT == '') {
        PORT = 8000
      }
       app.listen(PORT, host,  () => {
    console.log(`we are live on port ${PORT}`)
 })
   })
} catch (error) {
    console.log(error)
}
}

server()
