// import User from '../models/User'

// index, show, store, update, destroy

import { Request, Response } from 'express'

class UserController {
  /**
   * Trabalha a requisição de armazenar um cliente no banco de dados
   * @param req recebe a requisição feita pelo cliente
   * @param res a resposta que será enviada para o cliente
   */
  public async store (req:Request, res:Response): Promise<Response> {
    return res.json({ message: 'Hello World' })
  }
}

export default new UserController()
