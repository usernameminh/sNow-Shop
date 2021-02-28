const express = require('express');
const router = express.Router();

const homeController = require('../app/controller/home.controller');


// [GET /register]
router.get('/register', homeController.register)

// [GET /login]
router.get('/login', homeController.login)

// [GET /detail]
router.get('/detail', homeController.detail)

// [GET /contact]
router.get('/contact', homeController.contact)

// [GET /]
router.get('/', homeController.index)

module.exports = router;
