// req.params = Acessar route params (para edição, delete)
// req.query é para acessar os query params (para filtros)
// req.body = acessa corpo da requisição
// GET, POST, PUT, DELETE

import { Router } from 'express'
import SessionController from './controllers/SessionController'

const routes = Router()

routes.post('/sessions', SessionController.store)

export default routes
