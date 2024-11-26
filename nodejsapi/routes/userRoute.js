const express = require('express');
const User = require('../models/userModel')
const { body, validationResult } = require('express-validator');
const { FIRSTNAME_FIELD, EMAIL_FIELD, PASSWORD_FIELD } = require('../const');
const bcrypt = require('bcryptjs');
const route = express.Router();
const jwt = require('jsonwebtoken');
const {isAuthenticatedUser}  = require('../middlewares/auth')

// validation for signup
const signupValidation = [
    body(EMAIL_FIELD, 'Email should be valid').trim().notEmpty().isEmail(),
    body(FIRSTNAME_FIELD, 'Firstname should be valid').trim().notEmpty().isLength({ min: 5, max: 20 }),
    body(PASSWORD_FIELD, 'Password should be alphanumeric and between 5-32 char long').trim().notEmpty().isLength({ min: 5, max: 32 }).isAlphanumeric()
]

//validation for signin 
const signInValidation = [
    body(EMAIL_FIELD, 'Email should be valid').trim().notEmpty().isEmail(),
    body(PASSWORD_FIELD, 'Password should be alphanumeric and between 5-32 char long').trim().notEmpty().isLength({ min: 5, max: 32 }).isAlphanumeric()
]

const getsecPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(password, salt);
    return secPass;
}

route.get('/all', async (req, res) => {
    const userList = await User.find()
    res.send({ message: 'success', data: userList });
})

route.post('/signup', signupValidation, async (req, res) => {
    const validation = validationResult(req)
    if (validation.isEmpty()) {
        try {
            const tempUser = { ...req.body };
            tempUser.password = await getsecPassword(tempUser.password);
            const user = await new User(tempUser).save()
            if (user) {
                const token = jwt.sign(user.toJSON(), process.env.JWTSEC);
                res.status(200).send({ status: "success", token: token , user:user})
            }
        } catch (error) {
            res.status(400).send({ status: 'error' })
        }
    } else {
        res.status(400).send({ status: 'error', data: validation.errors })
    }
})

route.post('/signin', signInValidation, async (req, res) => {
    const validation = validationResult(req);
    if (validation.isEmpty()) {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (user) {
            const matchPassword = await bcrypt.compare(password, user.password);
            if (!matchPassword) {
                return res.status(400).send({ message: 'please user correct email and password.' })
            }
            const token = jwt.sign(user.toJSON(), process.env.JWTSEC);
            res.status(200).send({ status: "success", token: token, user:user })
        } else {
            res.status(400).send({ message: 'please user correct email and password.' })
        }
    } else {
        res.status(400).send({ status: 'error' })
    }
})

route.post('/getUser', isAuthenticatedUser ,  async (req, res) => {
    const userID = req.user._id;
    try {
        const user = await User.findById(userID);
        res.status(200).send({ status: 'success', data: user })
    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: 'Internal Server error!' })
    }
})

module.exports = route