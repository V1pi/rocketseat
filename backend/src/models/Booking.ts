import { Schema, model, Document } from 'mongoose'
import { IUser } from './User'
import { ISpot } from './Spot'

/**
 * Modelo da classe Booking
 * @noInheritDoc
 */
export interface IBooking extends Document {
    date: string,
    approved: boolean,
    /**
     * Referência ao ID do model [[IUser]]
     */
    user: IUser['id'],
    /**
     * Referência ao ID do model [[ISpot]]
     */
    spot: ISpot['id']
}

/**
 * @ignore
 */
const BookingSchema:Schema = new Schema({
    date: String,
    approved: Boolean,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },    
    spot: {
        type: Schema.Types.ObjectId,
        ref: 'Spot'
    }
})

export default model<IBooking>('Booking', BookingSchema)
