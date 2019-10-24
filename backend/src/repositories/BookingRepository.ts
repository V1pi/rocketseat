import IBaseRepository from './IBaseRepository'
import Booking, { IBooking } from '../models/Booking'

class BookingRepository implements IBaseRepository<IBooking> {
  public errorMessage = ''
  public async exists (booking : IBooking) : Promise<IBooking|null> {
    let bdBooking : IBooking | null = null
    if (booking.id) {
      bdBooking = await Booking.findOne({ id: booking.id })
    } else {
      this.errorMessage = 'Reserva inexistente!'
    }

    return bdBooking
  }

  public async delete (id : string) : Promise<IBooking | null> {
    const bookingBd = Booking.findByIdAndDelete(id)
    return bookingBd
  }

  public async getById (id : string) : Promise<IBooking | null> {
    const bdBooking = await Booking.findById(id)
    return bdBooking
  }

  public async save (booking : IBooking) : Promise<IBooking | null> {
    let bdBooking = await this.exists(booking)

    if (!bdBooking) {
      bdBooking = await Booking.create(booking)
    }

    await bdBooking.populate('spot').populate('user').execPopulate()
    return bdBooking
  }
}

export default new BookingRepository()
