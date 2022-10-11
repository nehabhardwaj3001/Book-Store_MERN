const express = require('express');
const { registerUser, loginUser, getAllUser } = require('../controllers/userController');
const router = express.Router();

router.route("/login").post(loginUser);
router.route("/signup").post(registerUser);
router.route("/users").get(getAllUser);


module.exports = router;