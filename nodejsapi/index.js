const express = require('express');
const app = express()
const connect = require('./database')
const path = require('path')

if(!process.env.PORT){
    require('dotenv').config()
}
app.use(require('cors')());
// json parser for request
app.use(express.json());

app.use(express.static(path.join(__dirname,'public')))

// all approutes middleware
app.use('/user', require('./routes/userRoute'))
app.use('/note', require('./routes/noteRoute'))

// wildcard route
app.get('/*',(req,res) => res.sendFile(path.join(__dirname,'public','index.html')))

app.listen(process.env.PORT || 3001, () => {
    connect()
    console.log(`Example app listening on port ${process.env.PORT}`)
})
