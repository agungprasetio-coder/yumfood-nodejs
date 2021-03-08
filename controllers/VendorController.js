const { Vendor, Tag } = require('../models')
class Controller {
  static index (req, res, next) {
    Vendor.findAll({
      order: [['name', 'ASC']],
      include: [Tag]
    })
    .then(data => {
      if (data.length === 0) {
        res.status(200).json({message: 'there is no restaurant registered yet', status: 200})
      }
      res.status(200).json(data)
    })
    .catch(err => {
      next(err)
    })
  }

  static show (req, res, next) {
    Vendor.findByPk(req.params.id)
    .then(data => {
      if (!data) {
        throw new Error({message: 'No Data!', status: 404})
      }
      res.status(200).json(data)
    })
    .catch(err => {
      next(err)
    })
  }

  static store (req, res, next) {
    const { name, logo } = req.body
    Vendor.create({
      name, logo
    })
    .then(data => {
      res.status(201).json(data)
    })
    .catch(err => {
      next(err)
    })
  }

  static update (req, res, next) {
    const { name, logo } = req.body
    const { id } = req.params
    Vendor.update({
      name, logo
    }, {
      where: {id}, returning: true
    })
    .then(data => {
      if (!data[0]) {
        throw new Error({message: 'No Data!', status: 404})
      }
      res.status(200).json(data)
    })
    .catch(err => {
      next(err)
    })
  }
  
  static destroy (req, res, next) {
    const { id } = req.params
    Vendor.destroy({ where: { id } })
    .then(data => {
      if(!data) {
        throw new Error({message: 'No Data!', status: 404})
      }
      res.status(200).json(data)
    })
    .catch(err => {
      next(err)
    })
  }
}

module.exports = Controller