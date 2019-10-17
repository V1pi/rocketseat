"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

var _router = require('./router'); var _router2 = _interopRequireDefault(_router);

/**
 * Gerencia as configurações do servidor NodeJS.
 * Responsável por todos os middlewares, database e routes
 */
class App {
    /**
     * Variável pública que faz referência ao express que será utilziado em toda
     * aplicação
    */
    
    /**
     * @constructor Chama os métodos privados
     * responsáveis pelos middlewares, database e routes
     * @returns void
     */
     constructor () {
      this.express = _express2.default.call(void 0, )
      this.middlewares()
      this.database()
      this.routes()
    }

    /**
     * Utiliza como RequestHandler o json e o cors
     */
     middlewares ()  {
      this.express.use(_express2.default.json())
      this.express.use(_cors2.default.call(void 0, ))
    }

     routes ()  {
      this.express.use(_router2.default)
    }

    /**
     * Conecta ao mongoDB utilizando uma conta pessoa e emite no console caso
     * algum erro ou sucesso.
     */
     database () {
      _mongoose2.default.connect('mongodb+srv://teste:teste@rocketseat-87nam.mongodb.net/semana09?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
        .then(() => console.log('DB Connected!'))
        .catch(err => {
          console.log(Error, err.message)
        })
    }
}

exports. default = new App().express
