import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import routes from './router'

/**
 * Gerencia as configurações do servidor NodeJS.
 * Responsável por todos os middlewares, database e routes
 */
class App {
    /**
     * Variável pública que faz referência ao express que será utilziado em toda
     * aplicação
    */
    public express: express.Application
    /**
     * @constructor Chama os métodos privados
     * responsáveis pelos middlewares, database e routes
     * @returns void
     */
    public constructor () {
      this.express = express()
      this.middlewares()
      this.database()
      this.routes()
    }

    /**
     * Utiliza como RequestHandler o json e o cors
     */
    private middlewares () : void {
      this.express.use(express.json())
      this.express.use(cors())
    }

    private routes () : void {
      this.express.use(routes)
    }

    /**
     * Conecta ao mongoDB utilizando uma conta pessoa e emite no console caso
     * algum erro ou sucesso.
     */
    private database ():void {
      mongoose.connect('mongodb+srv://teste:teste@rocketseat-87nam.mongodb.net/semana09?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
        .then(() => console.log('DB Connected!'))
        .catch(err => {
          console.log(Error, err.message)
        })
    }
}

export default new App().express
