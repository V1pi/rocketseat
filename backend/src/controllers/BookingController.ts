import { Request, Response } from "express";
import Booking from "../models/Booking";

class BookingController {
    /**
     * Trabalha a requisição de armazenar um booking no BD com o spot fornecido
     * @param req recebe a requisição feita pelo cliente
     * @param res a resposta que será enviada para o cliente
     */
    public async store(req: Request, res: Response) : Promise<Response> {
        const { user_id } = req.headers
        const { spot_id } = req.params
        const { date } = req.body

        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date
        })

        await booking.populate('spot').populate('user').execPopulate()

        return res.json(booking)
    }
}

export default new BookingController()