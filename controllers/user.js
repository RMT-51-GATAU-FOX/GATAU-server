const { User } = require("../models");

class UserController {
  static async register(request, response, next) {
    try {
      // we do something in here
      // some logic for register
      // give some response
      response.status(201).json({
        message: "Anggaplah register completed"
      })
    } catch (error) {
      response.status(500).json({
        message: "ISE"
      })
    }
  }
  
  static async login(request, response, next) {
    try {
      // we do something in here
      // some logic for login
      // give some response
      response.status(200).json({
        message: "Anggaplah login completed",
      });
    } catch (error) {
      response.status(500).json({
        message: "ISE",
      });
    }
  }
}

module.exports = UserController;
