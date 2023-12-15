const express = require('express')
const { getPhones, getOnePhone } = require('../controllers/phones.controllers')
const router = express.Router()

router.get('/getAllPhones', getPhones)

router.get('/getOnePhone/:phone_id', getOnePhone)

module.exports = router
