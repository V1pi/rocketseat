import { Schema, model, Document } from 'mongoose'
/**
 * Modelo da classe User
 * @noInheritDoc
 */
export interface IUser extends Document {
    email: string
}

/**
 * @ignore
 */
const UserSchema:Schema = new Schema({
  email: String
})

export default model<IUser>('User', UserSchema)
