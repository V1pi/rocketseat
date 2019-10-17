import { Request, Response } from "express";
import Spot from "../models/Spot";

class DashboardController {
    /**
     * Retorna todos os spots criados por um usuário específico
     * @param req recebe a requisição feita pelo cliente
     * @param res a resposta que será enviada para o cliente
     */
    public async show(req: Request, res:Response) : Promise<Response> {
        const { user_id } = req.headers

        const spots = await Spot.find({ user: user_id})

        return res.json(spots)
    } 
}

export default new DashboardController()