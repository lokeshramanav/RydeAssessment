var router = require("express").Router();
var userController = require("../controller/user.controller")
const userValidator = require('../middlewares/validator.middleware')

router.post("/", userValidator() , userController.createUser);

module.exports = router;