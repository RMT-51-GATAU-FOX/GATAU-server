const express = require('express');
const Controller = require('../controllers/user');
const router = express.Router();

router.post("/register", Controller.register)

module.exports = router;