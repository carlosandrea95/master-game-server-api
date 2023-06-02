const express = require('express')
const router = express.Router()
const serversRoutes = require('./serverRoutes')
// Rutas de la versión 1 de la API

// Middleware para procesar formularios
router.use('/', serversRoutes)

module.exports = router
