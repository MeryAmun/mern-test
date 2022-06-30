const express = require('express');
const connectDb = require('./db/dbConfig')
const cors = require('cors')
const dotenv = require('dotenv')
const userRoute = require('./routes/userRoutes')



const app = express();
dotenv.config();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
      return res.status(200).json({})
    }
    next()
  })

  //routes
app.use('/api', userRoute)
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
