const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController.js');
const loginController = require('./src/controllers/loginController.js')
// Rotas da home
route.get('/', homeController.index);

// Rotas login
route.get('/login/index', loginController.index);

module.exports = route;
