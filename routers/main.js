const express = require('express');
const router = express.Router();
const productController = require("../controllers/mainController");

router.get('/', productController.home);
router.get('/register', productController.register);
router.get('/login', productController.login);
router.get('/productCart', productController.productCart);

module.exports = router;