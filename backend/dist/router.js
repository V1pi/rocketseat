"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});// req.params = Acessar route params (para edição, delete)
// req.query é para acessar os query params (para filtros)
// req.body = acessa corpo da requisição
// GET, POST, PUT, DELETE

var _express = require('express');
var _SessionController = require('./controllers/SessionController'); var _SessionController2 = _interopRequireDefault(_SessionController);

const routes = _express.Router.call(void 0, )

routes.post('/sessions', _SessionController2.default.store)

exports. default = routes
