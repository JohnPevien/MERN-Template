if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod')
} else {
  module.exports = require('./dev')
}

/*
Format:
module.exports = {
    googleClientID: "insert google client id",
    googleClientSecret: "insert google client secret",
    mongoURI:"insert mongo uri",
    cookieKey: 'insert cookie'
}
*/
