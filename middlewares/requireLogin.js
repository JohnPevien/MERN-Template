module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).sent({ error: 'You must log in.' })
  }

  next()
}
