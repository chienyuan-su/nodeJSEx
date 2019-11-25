const express = require('express');
const app = express();
const session = require('express-session')
var sess = {
  secret: 'keyboard cat',
  cookie: {},
  resave: true,
  saveUninitialized: false,
}

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(session(sess))
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Accept, Content-Type, Cookie")
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8888")
    res.setHeader("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS, PATCH")
    res.setHeader("Access-Control-Allow-Credentials", "true")
    next();
})
app.post('/test', (req, res) => {
    console.log(req.sessionID);
    req.session.a = "hi"
    res.json({a: 1})
})

app.listen(7777, () => {
    console.log('start');
});
