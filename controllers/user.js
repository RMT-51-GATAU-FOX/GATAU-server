const { User } = require("../models");

class UserController {
  static async login(request, response, next) {
    try {
      // we do something in here
      // some logic for login
      // give some response
      res.status(200).json({
        message: "Anggaplah login completed",
      });
    } catch (error) {
      res.status(500).json({
        message: "ISE",
      });
    }
  }
}

module.exports = UserController;
