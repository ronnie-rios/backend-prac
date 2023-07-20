const express = require('express');
const { checkBodyMiddle } = require('../middleware/middle');
const playerController = require('../controller/players.controller');

const playerRoutes = express.Router();

playerRoutes.post('/',checkBodyMiddle, playerController.createPlayer);
playerRoutes.get('/', playerController.getPlayers);

module.exports = { playerRoutes }