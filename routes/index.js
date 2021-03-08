const router = require('express').Router()
const vendorRouter = require('./vendorRouter')
const orderRouter = require('./orderRouter')

router.get('/', (req, res) => {
  res.send('connection success')
})

router.use('/vendors', vendorRouter)
router.use('/orders', orderRouter)

module.exports = router