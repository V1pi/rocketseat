import { Request, Response } from 'express'
import Spot, {ISpot} from '../models/Spot'
import User from '../models/User'

class SpotController {
    /**
     * Retorna uma listagem de spot dependendo da tech
     * @param req recebe a requisição feita pelo cliente
     * @param res a resposta que será enviada para o cliente
     */
    public async index(req:Request, res: Response) : Promise<Response> {
        const { tech } = req.query

        const spots = await Spot.find({ techs: tech })

        return res.json(spots)
    }

    /**
     * Armazena um novo spot caso o usuário que solicitou o spot exista
     * @param req recebe a requisição feita pelo cliente
     * @param res a resposta que será enviada para o cliente
     */
    public async store(req:Request, res:Response) : Promise<Response> {
        const { filename } = req.file
        const { company, price, techs } = req.body
        const { user_id } = req.headers

        const user = await User.findById(user_id)

        if(!user)
            return res.status(400).json({ error:'User dosn\'t exists'})

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map((tech:string) => tech.trim()),
            price
        })
        
        return res.json({ ok:true })
    }
}

export default new SpotController()