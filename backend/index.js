const express = require('express')
const localesRouter = require('./routes/localesRouter.js')
const dotenv = require('dotenv')

const app = express();

dotenv.config()

app.use('/api', localesRouter)

const PORT = process.env.PORT || 3005

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}, em modo de: ${process.env.NODE_ENV}`)
})
