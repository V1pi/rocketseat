// req.params = Acessar route params (para edição, delete)
// req.query é para acessar os query params (para filtros)
// req.body = acessa corpo da requisição
// GET, POST, PUT, DELETE

import { Router } from 'express'
import SessionController from './controllers/SessionController'
import SpotController from './controllers/SpotController'
import Upload from './config/Upload'
import DashboardController from './controllers/DashboardController'
import BookingController from './controllers/BookingController'
import multer = require('multer')

/**
 * Gerencia as rotas
 */
const routes = Router()

/**
 * Empacotador da classe Upload na qual manipula o upload de imagens para o servidor
 */
const upload = multer(Upload)

routes.post('/sessions', SessionController.store)
routes.post('/spots', upload.single('thumbnail'), SpotController.store)
routes.get('/spots', SpotController.index)
routes.get('/dashboard', DashboardController.show)
routes.get('/', (req, res) => {
  return res.send('Olá galera')
})

routes.post('/spots/:spot_id/bookings', BookingController.store)

export default routes
