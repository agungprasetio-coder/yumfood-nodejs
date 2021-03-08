const router = require('express').Router()
const OrderController = require('../controllers/OrderController')

router.get('/', OrderController.index)
router.get('/:id', OrderController.show)
router.post('/', OrderController.store)
router.put('/:id', OrderController.update)
router.delete('/:id', OrderController.destroy)

module.exports = router