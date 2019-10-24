import IBaseRepository from './IBaseRepository'
import User, { IUser } from '../models/User'

class UserRepository implements IBaseRepository<IUser> {
  public errorMessage = ''
  public async exists (user : IUser) : Promise<IUser|null> {
    let bdUser : IUser | null = null
    if (user.id) {
      bdUser = await User.findOne({ id: user.id })
    }
    if (!bdUser && user.email) {
      bdUser = await User.findOne({ email: user.email })
    } else {
      this.errorMessage = 'Usuário inexistente!'
    }

    return bdUser
  }

  public async delete (id : string) : Promise<IUser | null> {
    const userBd = User.findByIdAndDelete(id)
    return userBd
  }

  public async getById (id : string) : Promise<IUser | null> {
    const bdUser = await User.findById(id)
    return bdUser
  }

  public async save (user : IUser) : Promise<IUser | null> {
    let bdUser = await this.exists(user)

    if (!bdUser) {
      bdUser = await User.create(user)
    }
    return bdUser
  }
}

export default new UserRepository()
