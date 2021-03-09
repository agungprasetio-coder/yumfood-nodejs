const express = require('express')
const errorHandler = require('./middlewares/errorHandler')
const app = express()
const PORT = 3000
const router = require('./routes')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`app running on port http://localhost:${PORT}`)
})