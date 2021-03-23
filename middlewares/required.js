const { validationResult } = require('express-validator');
const Note = require('../models/note');
const User = require('../models/user');


const validate = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json(errors)
    }
    next();
};

const existId = async(id) => {
    const exist = await Note.findById(id);
    if (!exist) {
        throw new Error(`Id wasnt finded`);
    }
}

const existUserId = async(id) => {
    const exist = await User.findById(id);
    if (!exist) {
        throw new Error(`Id wasnt finded`);
    }
}

module.exports = {
    validate,
    existId,
    existUserId
}