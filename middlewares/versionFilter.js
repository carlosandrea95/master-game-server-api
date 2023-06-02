const versionFilter = (req, res, next) => {
  const allowedVersions = ['v1', 'v2']

  const version = req.headers['x-api-version']

  if (!version || !allowedVersions.includes(version)) {
    return res.status(400).json({ message: 'Versión de API no admitida' })
  }

  req.apiVersion = version

  next()
}
module.exports = versionFilter
