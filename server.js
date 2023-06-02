const express = require('express')
const db_connect = require('./database')
const v1 = require('./routes/v1')
const versionFilter = require('./middlewares/versionFilter')
const app = express()

// Middleware para procesar JSON
app.use(express.json())

// Aplica el middleware de filtro de versión en las rutas que lo necesiten
app.use('/api/v1', versionFilter, v1)

// Puerto de escucha
const port = process.env.PORT || 3000

// Conexión a la base de datos
db_connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Servidor escuchando en el puerto ${port}`)
    })
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error)
  })
