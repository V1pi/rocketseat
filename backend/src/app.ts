import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { MONGODB_URI } from './config/config'
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
    public connection?: typeof mongoose
    /**
     * @constructor Chama os métodos privados
     * responsáveis pelos middlewares, database e routes
     * @returns void
     */
    public constructor () {
      this.express = express()
      this.middlewares()
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
    public async connectDatabase ():Promise<void> {
      if (!this.connection && MONGODB_URI) {
        this.connection = await mongoose.connect(MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        })
      }
    }

    public async closeDatabase () : Promise<void> {
      if (this.connection) {
        await this.connection.disconnect()
        this.connection = undefined
      }
    }
}

export default new App()
