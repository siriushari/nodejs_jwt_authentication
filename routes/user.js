const express = require ('express')

const router = express.Router()

const checktoken = require('../middleware/token')

const authcontroller = require('../controller/auth')

router.get('/', checktoken ,authcontroller.new)

router.get('/listusers',checktoken,authcontroller.listusers)

router.post('/login',authcontroller.login)

module.exports = router