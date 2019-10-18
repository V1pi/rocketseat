import dotenv from 'dotenv'
dotenv.config()

/**
 * Variável que armazena o URL do banco de dados de acordo com o tipo com o mode de operação
 * development, test e production
 */
let MONGODB_URI = process.env.HOST_PRODUCTION

if (process.env.NODE_ENV === 'test') {
  MONGODB_URI = process.env.HOST_TEST
} else if (process.env.NODE_ENV === 'development') {
  MONGODB_URI = process.env.HOST_DEVELOPMENT
}

export { MONGODB_URI }
