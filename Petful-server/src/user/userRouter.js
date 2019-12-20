const express = require('express')
const users = require('./users')

const UserRouter = express.Router();


UserRouter
.route('/')
.get((req, res, next) => {
    res.status(200).json(users)
})

module.exports = UserRouter; 