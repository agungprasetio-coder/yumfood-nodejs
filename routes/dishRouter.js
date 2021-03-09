const router = require('express').Router({mergeParams: true})
const DishController = require('../controllers/DishController')

router.get('/dishes', DishController.index)
router.get('/dishes/:DishId', DishController.show)
router.post('/dishes', DishController.store)
router.put('/dishes/:DishId', DishController.update)
router.delete('/dishes/:DishId', DishController.destroy)

module.exports = router