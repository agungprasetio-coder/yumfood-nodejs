const router = require('express').Router()
const DishController = require('../controllers/DishController')

router.get('/dishes', DishController.index)
router.get('/dishes/:id', DishController.show)
router.post('/dishes', DishController.store)
router.put('/dishes/:id', DishController.update)
router.delete('/dishes/:id', DishController.destroy)

module.exports = router