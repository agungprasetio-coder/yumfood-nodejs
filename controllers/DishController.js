const { Dish, Vendor } = require('../models')
const { Op } = require('sequelize')
class Controller {
  static index (req, res, next) {
    const { VendorId } = req.params
    Dish.findAll({ where: { VendorId } })
    .then(data => {
      if (data.length === 0) {
        res.status(200).json({message: `You haven't added any dishes for this restaurant`})
      }
      res.status(200).json(data)
    })
    .catch(err => {
      next(err)
    })
  }

  static show (req, res, next) {
    const { VendorId, DishId } = req.params
    Dish.findOne({ where: { [Op.and]: [{ VendorId, id: DishId }] } })
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      next(err)
    })
  }

  static store (req, res, next) {
    const { VendorId } = req.params
    const { name } = req.body
    Dish.create({
      name,
      VendorId
    })
    .then(data => {
      res.status(201).json(data)
    })
    .catch(err => {
      next(err)
    })
  }

  static update (req, res, next) {
    const { VendorId, DishId } = req.params
    const { name } = req.body
    Dish.update({ name }, { where: { [Op.and]: [{VendorId}, {id: DishId}] } })
    .then(data => {
      if (!data) {
        throw new Error({message: 'No Data!', status: 404})
      }
      res.status(200).json({message: 'update data success!'})
    })
    .catch(err => {
      next(err)
    })
  }
  
  static destroy (req, res, next) {
    const { VendorId, DishId } = req.params
    Dish.destroy({ where: { [Op.and]: [{ VendorId }, { id: DishId }] } })
    .then(data => {
      if (!data) {
        throw new Error({message: 'No Data!', status: 404})
      }
      res.status(200).json({message: 'delete data success!'})
    })
    .catch(err => {
      next(err)
    })
  }
}

module.exports = Controller