"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = void 0;

var _express = _interopRequireDefault(require("express"));

var _serverController = require("../controller/serverController");

var api = _express["default"].Router();

exports.api = api;
api.get('/internetxdia', _serverController.serverController.internetdia);
api.post('/internetxdia', _serverController.serverController.internetdiapost);
api.get('/invoicing', _serverController.serverController.invoicing);
api.get('/invoicingid', _serverController.serverController.invoicingid);
api.get('/invoicingidnf', _serverController.serverController.invoicingidnofile);
api.get('/guarda_saved', _serverController.serverController.guarda_saved);
api.get('/guarda_nosaved', _serverController.serverController.guarda_nosaved);
api.get('/guarda_error', _serverController.serverController.guarda_error);
api.get('/login_rem', _serverController.serverController.login_rem);
api.post('/login_post', _serverController.serverController.login_post);
api.get('/last_movements', _serverController.serverController.last_movements);
api.get('/', _serverController.serverController.last_movements);