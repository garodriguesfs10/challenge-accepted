const express = require('express')
const router = express.Router();
const locales = require("../base/locales")
const weathers = require('../base/weather')

router.get('/locales', (req, res) => {
    res.json(locales)
})

router.get('/weathers', (req, res) => {
    res.json(weathers)
})


router.get('/weather/:id', (req, res) => {
    const { id } = req.params
    const response = weathers.find(elem => elem.locale.id == id)
    res.json(response)
})



module.exports = router