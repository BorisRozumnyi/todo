const {Router} = require('express')
const config = require('config')
const Product = require('../models/Product')
const router = Router()

router.get('/', (req, res) => {
  try {
    res.json({test: 'test'})
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова'})
  }
})

router.post('/', (req, res) => {
  try {
    console.log(req);
    res.send('POST request to the homepage', req);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова'})
  }
})

module.exports = router