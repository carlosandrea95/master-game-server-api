const express = require('express')
const router = express.Router()
const Servers = require('../models/servers')

// Ruta para añadir un servidor a la lista
router.post('/servers', async (req, res) => {
  try {
    const { name, ip, port, category, description, maxPlayers, online } =
      req.body
    const server = new Servers({
      name,
      ip,
      port,
      category,
      description,
      maxPlayers,
      online
    })
    await server.save()
    res.status(201).json({ message: 'Servidor añadido con éxito', server })
  } catch (error) {
    res.status(500).json({ message: 'Error al añadir el servidor', error })
  }
})
// Ruta para obtener servidores por categoría
router.get('/servers/category/:category', async (req, res) => {
  try {
    const category = req.params.category

    // Filtrar los servidores por la categoría especificada
    const servers = await Servers.find({ category })

    res.status(200).json(servers)
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error al obtener los servidores por categoría', error })
  }
})
// Ruta para mostrar la lista de servidores
router.get('/servers', async (req, res) => {
  try {
    const servers = await Servers.find()
    res.status(200).json(servers)
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error al obtener la lista de servidores', error })
  }
})

module.exports = router
