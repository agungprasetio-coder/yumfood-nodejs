const { Order } = require('../models')
class Controller {
  static index (req, res, next) {
    Order.findAll({ order: [['createdAt', 'DESC']], where: {status: false} })
    .then(data => {
      if(data.length === 0) {
        res.status(200).json({message: 'No orders request yet!'})
      }
      res.status(200).json(data)
    })
    .catch(err => {
      next(err)
    })
  }

  static show (req, res, next) {
    const { id } = req.params
    Order.findByPk(id)
    .then(data => {
      if (!data) {
        throw {message: 'No Data!', status: 404}
      }
      res.status(200).json(data)
    })
    .catch(err => {
      next(err)
    })
  }

  static store (req, res, next) {
    const { name, amount, note, table_number } = req.body
    const newOrder = {
      name, amount, note, table_number, status: false
    }
    Order.create(newOrder)
    .then(data => {
      res.status(201).json({message: 'create order success', data})
    })
    .catch(err => {
      next(err)
    })
  }

  static update (req, res, next) {
    const { id } = req.params
    const { name, amount, note, table_number, status } = req.body
    const updateOrder = {
      name, amount, note, table_number, status
    }
    Order.update(updateOrder, { where: {id} })
    .then(data => {
      if (!data) {
        throw {message: 'No Data!', status: 404}
      }
      res.status(200).json({message: 'update data success', data})
    })
    .catch(err => {
      next(err)
    })
  }
  
  static destroy (req, res, next) {
    const { id } = req.params
    Order.destroy({ where: { id } })
    .then(data => {
      if (!data) {
        throw {message: 'No Data!', status: 404}
      }
      res.status(200).json({message: 'delete order success'})
    })
    .catch(err => {
      next(err)
    })
  }
}

module.exports = Controller