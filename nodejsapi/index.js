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

// all approutes middleware
app.use('/user', require('./routes/userRoute'))
app.use('/note', require('./routes/noteRoute'))

// serving react app for all routes except api's route
// This code makes sure that any request that does not matches a static file
// in the dist folder, will just serve index.html. Client side routing is
// going to make sure that the correct content will be loaded.
app.use((req, res, next) => {
    if (/(.ico|.js|.css|.jpg|.png|.map)$/i.test(req.path)) {
        next();
    } else {
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.header('Expires', '-1');
        res.header('Pragma', 'no-cache');
        res.sendFile(path.join(__dirname, '../dist', 'index.html'));
    }
});
app.use(express.static(path.join(__dirname,'../dist')))

app.listen(process.env.PORT || 3001, () => {
    connect()
    console.log(`Example app listening on port ${process.env.PORT}`)
})
