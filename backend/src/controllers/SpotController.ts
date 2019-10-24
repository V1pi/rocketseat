import { Request, Response } from 'express'
import Spot from '../models/Spot'
import SpotRepository from '../repositories/SpotRepository'

class SpotController {
  /**
     * Retorna uma listagem de spot dependendo da tech
     * @param req recebe a requisição feita pelo cliente
     * @param res a resposta que será enviada para o cliente
     */
  public async index (req:Request, res: Response) : Promise<Response> {
    const { tech } = req.query

    const spots = await SpotRepository.findByTechs(tech)

    return res.json(spots)
  }

  /**
     * Armazena um novo spot caso o usuário que solicitou o spot exista
     * @param req recebe a requisição feita pelo cliente
     * @param res a resposta que será enviada para o cliente
     */
  public async store (req:Request, res:Response) : Promise<Response> {
    const { filename } = req.file
    const { company, price, techs } = req.body
    const { userid: userId } = req.headers

    const spot = new Spot({
      user: userId,
      thumbnail: filename,
      company,
      techs: techs.split(',').map((tech:string) => tech.trim()),
      price
    })

    const newSpot = await SpotRepository.save(spot)

    if (newSpot) {
      return res.json({ ok: true })
    } else {
      return res.status(400).json({ error: SpotRepository.errorMessage })
    }
  }
}

export default new SpotController()
