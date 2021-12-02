const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController")

router.get ( '/aceitunasgriegas', productController.aceitunasgriegas);
router.get ( '/aceitunasverdes', productController.aceitunasverdes);
router.get ( '/elia5lt', productController.elia5lt);
router.get ( '/elia3lt', productController.elia3lt);
router.get ( '/elia500ml', productController.elia500ml);
router.get ( '/libanti5lt', productController.libanti5lt);
router.get ( '/libanti3lt', productController.libanti3lt);
router.get ( '/libanti1lt', productController.libanti1lt);
router.get ( '/libanti500ml', productController.libanti500ml);

module.exports = router;
