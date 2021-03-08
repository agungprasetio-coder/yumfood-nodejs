const router = require('express').Router()
const dishRouter = require('./dishRouter')
const VendorController = require('../controllers/VendorController')

router.get('/', VendorController.index)
router.get('/:id', VendorController.show)
router.post('/', VendorController.store)
router.put('/:id', VendorController.update)
router.delete('/:id', VendorController.destroy)

router.use('/:id', dishRouter)

module.exports = router