import { Schema, model, Document } from 'mongoose'
/**
 * @noInheritDoc
 */
interface UserInterface extends Document {
    email: string
}

/**
 * @ignore
 */
const UserSchema:Schema = new Schema({
  email: String
})

export default model<UserInterface>('User', UserSchema)
