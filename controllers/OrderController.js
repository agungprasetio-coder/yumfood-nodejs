class Controller {
  static index (req, res, next) {
    res.send('show all orders')
  }

  static show (req, res, next) {
    res.send('show order detail by id')
  }

  static store (req, res, next) {
    res.send('add new order')
  }

  static update (req, res, next) {
    res.send('update order by id')
  }
  
  static destroy (req, res, next) {
    res.send('delete order by id')
  }
}

module.exports = Controller