const express = require('express');
const app = express()
const connect = require('./database')

if(!process.env.PORT){
    require('dotenv').config()
}
app.use(require('cors')());
// json parser for request
app.use(express.json());

app.use(express.static('./public'))
// app.use('/application',(req,res) => res.sendFile(__dirname+'/public/index.html'))

// all approutes middleware
app.get('/test', (req,res) => res.send({m:'hellow'}) )
app.use('/user', require('./routes/userRoute'))
app.use('/note', require('./routes/noteRoute'))

app.listen(process.env.PORT || 3001, () => {
    connect()
    console.log(`Example app listening on port ${process.env.PORT}`)
})
