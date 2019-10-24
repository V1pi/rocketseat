import IBaseRepository from './IBaseRepository'
import Spot, { ISpot } from '../models/Spot'
import UserRepository from './UserRepository'

export interface ISpotRepository extends IBaseRepository<ISpot> {
  getByUserId (id:string|string[]):Promise<ISpot[] | null>,
  findByTechs (techs: string[]):Promise<ISpot[] | null>
}

class SpotRepository implements ISpotRepository {
  public errorMessage = ''

  public async findByTechs (techs: string[]): Promise<ISpot[] | null> {
    const spots = await Spot.find({ techs })
    return spots
  }

  public async exists (spot : ISpot) : Promise<ISpot|null> {
    let bdSpot
    if (spot.id) {
      bdSpot = await Spot.findById(spot.id)
    }
    if (!bdSpot) {
      bdSpot = await Spot.findOne({ user: spot.user })
    }

    return bdSpot
  }

  async delete (id : string) : Promise<ISpot | null> {
    const spotBd = Spot.findByIdAndDelete(id)
    return spotBd
  }

  public async getById (id : string) : Promise<ISpot | null> {
    const bdSpot = await Spot.findById(id)
    return bdSpot
  }

  public async getByUserId (id:string|string[]):Promise<ISpot[] | null> {
    if (Array.isArray(id)) {
      id = id[0]
    }

    const bdSpot = await Spot.find({ user: id })

    return bdSpot
  }

  public async save (spot : ISpot) : Promise<ISpot | null> {
    let bdSpot:ISpot | null = null

    const user = await UserRepository.getById(spot.user)

    if (user) {
      bdSpot = await Spot.create(spot)
    } else {
      this.errorMessage = 'Usuário não existe!'
    }
    return bdSpot
  }
}

export default new SpotRepository()
