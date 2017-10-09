const express = require('express')
const models = require('./models');
const mongoose = require('mongoose');
const session = require('express-session');
const expressGraphQL = require('express-graphql');
const MongoStore = require('connect-mongo')(session);
const next = require('next');
const ArticleService = require('./services/article');
const schema = require('./schema/schema');

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
    // const date = new Date();
    // ArticleService.save({ title: "Novy clanek 3", perex: "tady nakej perex taky", content: "Lorem ipsum dolor snad uz konecne." });

    ArticleService.findAll();

    // Instruct Express to pass on any request made to the '/graphql' route
    // to the GraphQL instance.
    server.use('/graphql', expressGraphQL(req => ({
      schema,
      pretty: true,
      graphiql: true
    })));

    server.get('/articles/:id', (req, res) => {
      const actualPage = '/article'
      const queryParams = { _id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    });

    server.get('/admin/articles/new', (req, res) => {
      const actualPage = '/admin/articles/create'
      app.render(req, res, actualPage)
    });

    server.get('/admin/articles/edit/:id', (req, res) => {
      const actualPage = '/admin/articles/edit'
      const queryParams = { _id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    });

     server.get('*', (req, res) => {
       return handle(req, res)
     })

     server.listen(5000, (err) => {
       if (err) throw err
       console.log('> Ready on http://localhost:5000')
     })

     module.exports = server;
   })
