const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    address: String,
    phone: {
        type:String,
        // required: true,
    },
    password:  {
        type:String,
        required: true,
        // set: Data.prototype.saltySha1 // some function called before saving the data
    },
    role: String
});

userSchema.methods.toJSON = function() {
    const obj = this.toObject();
    delete obj.password;
    return obj
}

module.exports = mongoose.model('User',userSchema);