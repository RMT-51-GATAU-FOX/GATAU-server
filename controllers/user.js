const User = require('../models').User;

module.exports = class Controller {
  static async register(req, res, next) {
    try {
      // we do something in here
      // some logic for register
      // give some response
      res.status(201).json({
        message: "Anggaplah register completed"
      })
    } catch (error) {
      res.status(500).json({
        message: "ISE"
      })
    }
  }
}