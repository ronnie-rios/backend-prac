const express = require('express');

const { getCats } = require('../controller/fakedata.controller');


const catRoutes = express.Router()

catRoutes.get('/', getCats);

module.exports = { catRoutes }