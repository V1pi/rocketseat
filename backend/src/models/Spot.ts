import { Schema, model, Document } from 'mongoose'
import { IUser } from './User'

/**
 * Modelo da classe Spot
 * @noInheritDoc
 */
export interface ISpot extends Document {
    thumbnail: string,
    company: string,
    price: number,
    techs: [string],
    /**
     * Referência ao ID do model [[IUser]]
     */
    user: IUser['id']
}

/**
 * @ignore
 */
const SpotSchema:Schema = new Schema({
  thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
      type: Schema.Types.ObjectId
    }
})

export default model<ISpot>('Spot', SpotSchema)
