const express = require('express')
const mongoose = require('mongoose')
const routes = require('./router')

const app = express()

mongoose.connect('mongodb+srv://teste:teste@rocketseat-87nam.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser:  true,
    useUnifiedTopology: true
})
.then(() => console.log('DB Connected!'))
.catch(err => {
    console.log(Error, err.message);
});

app.use(express.json())
app.use(routes)


app.listen(3335)