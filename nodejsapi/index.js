const express = require('express');
const app = express()
const connect = require('./database')

if(!process.env.PORT){
    require('dotenv').config()
}
// json parser for request
app.use(express.json());
app.use(require('cors'));

// all approutes middleware
app.use('/user', require('./routes/userRoute'))
app.use('/note', require('./routes/noteRoute'))

app.listen(process.env.PORT || 3001, () => {
    connect()
    console.log(`Example app listening on port ${process.env.PORT}`)
})
