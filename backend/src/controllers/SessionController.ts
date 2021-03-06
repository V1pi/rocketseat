// import User from '../models/User'

// index, show, store, update, destroy

import { Request, Response } from 'express'
import User from '../models/User'
import UserRepository from '../repositories/UserRepository'

class UserController {
  /**
   * Trabalha a requisição de armazenar um cliente no banco de dados
   * @param req recebe a requisição feita pelo cliente
   * @param res a resposta que será enviada para o cliente
   */
  public async store (req:Request, res:Response): Promise<Response> {
    const { email } = req.body
    const receiverUser = new User({ email })
    const newUser = await UserRepository.save(receiverUser)
    return res.json(newUser)
  }
}

export default new UserController()
