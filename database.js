const mongoose = require('mongoose')
const username = 'cjoseare1995'
const password = 'lUg8wna38U7wx1iM'
const databaseName = 'master'
const clusterName = 'cluster0.mvvdlgi'
const db_connect = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${username}:${password}@${clusterName}.mongodb.net/${databaseName}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
    .then(() => {
      console.log('Conexión exitosa a la base de datos')
    })
    .catch((error) => {
      console.error('Error al conectar a la base de datos:', error.message)
      throw new Error(error)
    })
}

module.exports = db_connect
