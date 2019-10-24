import mongoose from 'mongoose'
import { MONGODB_URI } from '../config/config'
import User from '../models/User'
import UserRepository from '../repositories/UserRepository'
import Booking from '../models/Booking'
import Spot from '../models/Spot'

beforeAll(async () => {
  if (MONGODB_URI) {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }
})

afterAll(async () => {
  await mongoose.disconnect()
})

afterEach(async () => {
  User.deleteMany({})
  Booking.deleteMany({})
  Spot.deleteMany({})
})

test('CREATE USER', async () => {
  const user = new User({ email: 'vimivini99@gmail.com' })
  const result = await UserRepository.save(user)
  expect(result).not.toBeNull()
  expect(result).toMatchObject({ email: 'vimivini99@gmail.com' })
})
