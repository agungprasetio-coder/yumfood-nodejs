class Controller {
  static index (req, res, next) {
    res.send('show all vendor')
  }

  static show (req, res, next) {
    res.send('show vendor by id')
  }

  static store (req, res, next) {
    res.send('add new vendor')
  }

  static update (req, res, next) {
    res.send('update vendor by id')
  }
  
  static destroy (req, res, next) {
    res.send('delete vendor by id')
  }
}

module.exports = Controller