const mongoose = require('mongoose')

const serverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ip: { type: String, required: true },
  port: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String },
  maxPlayers: { type: Number },
  online: { type: Boolean, default: false }
})

const Servers = mongoose.model('Servers', serverSchema)

module.exports = Servers
