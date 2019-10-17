import app from './app'

async function tesste () : Promise<void> {
  await app.connect()
}
tesste()
app.express.listen(3333, 'localhost')
