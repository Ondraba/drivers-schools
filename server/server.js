const express = require('express')
const models = require('./models');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const next = require('next');
const ArticleService = require('./services/article');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
   .then(() => {
     const server = express()

     const MONGO_URI = 'mongodb://localhost:27017/technicke-vzdelani';

     mongoose.Promise = global.Promise;

     mongoose.connect(MONGO_URI);
     mongoose.connection
    .once('open', () => console.log('Connected to MongoDB local instance.'))
    .on('error', error => console.log('Error connecting to local MongoDB:', error));

    server.use(session({
      resave: true,
      saveUninitialized: true,
      secret: 'aaabbbccc',
      store: new MongoStore({
        url: MONGO_URI,
        autoReconnect: true
      })
    }));
    const date = new Date();
    // ArticleService.save({ title: "Article 1", content: "Lorem ipsum dolor sit amet.", createdAt: date.toLocaleDateString() });

    ArticleService.findAll();

     server.get('*', (req, res) => {
       return handle(req, res)
     })

     server.listen(5000, (err) => {
       if (err) throw err
       console.log('> Ready on http://localhost:5000')
     })

     module.exports = server;
   })
