import { Request, Response } from 'express'
import Booking from '../models/Booking'
import BookingRepository from '../repositories/BookingRepository'

class BookingController {
  /**
     * Trabalha a requisição de armazenar um booking no BD com o spot fornecido
     * @param req recebe a requisição feita pelo cliente
     * @param res a resposta que será enviada para o cliente
     */
  public async store (req: Request, res: Response) : Promise<Response> {
    const { userid: userId } = req.headers
    const { spotId } = req.params
    const { date } = req.body

    const booking = new Booking({
      user: userId,
      spot: spotId,
      date
    })

    const newBooking = await BookingRepository.save(booking)

    return res.json(newBooking)
  }
}

export default new BookingController()
