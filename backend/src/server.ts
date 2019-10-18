import app from './app'
app.connectDatabase()
app.express.listen(3333, 'localhost')
