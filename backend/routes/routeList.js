var express = require('express');
var router = express.Router();
let UserController = require("../controllers/UserController");
let VerifyToken = require("../controllers/VerifyToken");

/* GET home page. */
router.get("/", VerifyToken,UserController.main_page)

router.post("/log-in", UserController.log_in)

router.post("/sign-up", UserController.sign_up);

module.exports = router;
