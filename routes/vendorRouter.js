const router = require('express').Router()
const dishRouter = require('./dishRouter')
const VendorController = require('../controllers/VendorController')

router.get('/', VendorController.index)
router.get('/:VendorId', VendorController.show)
router.post('/', VendorController.store)
router.put('/:VendorId', VendorController.update)
router.delete('/:VendorId', VendorController.destroy)

router.use('/:VendorId', dishRouter)

module.exports = router