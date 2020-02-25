const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI);
const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//client id
// 495381793327-mb436qvpi9jg1ecc1ib97g6hae4l5d06.apps.googleusercontent.com
//client secret
//E0XqO0nOmJTVX6CcDw4GPCqA

//https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&/

//scope=profile%20email

//&client_id=495381793327-mb436qvpi9jg1ecc1ib97g6hae4l5d06.apps.googleusercontent.com
