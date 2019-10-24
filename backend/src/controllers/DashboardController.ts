import { Request, Response } from 'express'
import SpotRepository from '../repositories/SpotRepository'
import { ISpot } from '../models/Spot'

class DashboardController {
  /**
     * Retorna todos os spots criados por um usuário específico
     * @param req recebe a requisição feita pelo cliente
     * @param res a resposta que será enviada para o cliente
     */
  public async show (req: Request, res:Response) : Promise<Response> {
    const { userid: userId } = req.headers

    let spots:null | ISpot[] = null
    if (userId) {
      spots = await SpotRepository.getByUserId(userId)
    }

    return res.json(spots)
  }
}

export default new DashboardController()
