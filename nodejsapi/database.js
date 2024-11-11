const mongoose = require('mongoose');
// const MONGO_URI = 'mongodb+srv://avinashkumar906:Mongo_906@cluster0.2c0br.mongodb.net/?retryWrites=true&w=majority';

const connection = () => mongoose.connect(process.env.MONGO_URI).then(()=>console.log('Mongo connected!')).catch(console.log);

module.exports = connection;