const express = require('express')
const route = express.Router()
const Note = require('../models/noteModel')
const { validationResult, body } = require('express-validator')
const { isAuthenticatedUser } = require('../middlewares/auth')


// valid note validation
const noteValidation = [
    body('title', 'Title should be valid').isLength({ min: 4 }),
    body('description', 'Description should be valid').isLength({ min: 10 })
]
route.get('/getAll', isAuthenticatedUser, async (req, res) => {
    const notes = await Note.find({ user: req.user._id })
    res.status(200).send(notes);
})

route.post('/addNote', isAuthenticatedUser, noteValidation, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(201).send({ status: 'error', errors })
    } else {
        const note = new Note({ ...req.body, user: req.user._id })
        const result = await note.save()
        res.status(200).send({ message: 'success', result });
    }
})

route.put('/updateNote/:_id', isAuthenticatedUser, noteValidation, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(201).send({ status: 'error', errors })
    } else {
        const body = { ...req.body, user: req.user._id };
        delete body._id; //removing old id.
        const result = await Note.updateOne({ _id: req.params._id, user: req.user._id }, body);
        res.status(200).send({ message: 'success', result });
    }
})

route.delete('/deleteNote/:_id', isAuthenticatedUser, async (req, res) => {
    const result = await Note.deleteOne({ _id: req.params._id, user: req.user._id }, { ...req.body, user: req.user._id }, { upsert: true })
    res.status(200).send({ message: 'success', result });
})

module.exports = route;