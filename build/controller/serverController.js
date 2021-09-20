"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serverController = void 0;

var _internetxdiaok = _interopRequireDefault(require("../../mock/internetxdiaok.json"));

var _internetxdiaokpost = _interopRequireDefault(require("../../mock/internetxdiaokpost.json"));

var _invoicing2 = _interopRequireDefault(require("../../mock/invoicing.json"));

var _invoicingid2 = _interopRequireDefault(require("../../mock/invoicingid.json"));

var _invoicingidnofile2 = _interopRequireDefault(require("../../mock/invoicingidnofile.json"));

var _guarda_gigassaved = _interopRequireDefault(require("../../mock/guarda_gigassaved.json"));

var _guarda_gigasok = _interopRequireDefault(require("../../mock/guarda_gigasok.json"));

var _login_rem2 = _interopRequireDefault(require("../../mock/login_rem.json"));

var _login_post2 = _interopRequireDefault(require("../../mock/login_post.json"));

var _lastmovements = _interopRequireDefault(require("../../mock/lastmovements.json"));

var serverController = {
  internetdia: function internetdia(_require, response) {
    response.json(_internetxdiaok["default"]);
  },
  internetdiapost: function internetdiapost(_require, response) {
    response.json(_internetxdiaokpost["default"]);
  },
  invoicing: function invoicing(_require, response) {
    response.json(_invoicing2["default"]);
  },
  invoicingid: function invoicingid(_require, response) {
    response.json(_invoicingid2["default"]);
  },
  invoicingidnofile: function invoicingidnofile(_require, response) {
    response.json(_invoicingidnofile2["default"]);
  },
  guarda_saved: function guarda_saved(_require, response) {
    response.json(_guarda_gigassaved["default"]);
  },
  guarda_nosaved: function guarda_nosaved(_require, response) {
    response.json(_guarda_gigasok["default"]);
  },
  guarda_error: function guarda_error(_require, response) {
    response.status(500).send({
      ok: false,
      message: 'Error genérico'
    });
  },
  login_rem: function login_rem(_require, response) {
    response.json(_login_rem2["default"]);
  },
  login_post: function login_post(_require, response) {
    response.json(_login_post2["default"]);
  },
  last_movements: function last_movements(_require, response) {
    response.json(_lastmovements["default"]);
  }
};
exports.serverController = serverController;