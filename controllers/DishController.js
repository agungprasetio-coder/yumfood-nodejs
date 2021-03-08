class Controller {
  static index (req, res, next) {
    res.send('show all dishes for a specific vendor')
  }

  static show (req, res, next) {
    res.send('show dish detail by id for a specific vendor')
  }

  static store (req, res, next) {
    res.send('add new dish for a specific vendor')
  }

  static update (req, res, next) {
    res.send('update dish by id for a specific vendor')
  }
  
  static destroy (req, res, next) {
    res.send('delete dish by id for a specific vendor')
  }
}

module.exports = Controller