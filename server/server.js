const express = require("express");
const models = require("./models");
const mongoose = require("mongoose");
const session = require("express-session");
const expressGraphQL = require("express-graphql");
const MongoStore = require("connect-mongo")(session);
const next = require("next");
const schema = require("./schema/schema");
const routes = require("./services/routes");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const app = next({ dev });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  const MONGO_URI =
    "mongodb://archie:clovek789@ds143744.mlab.com:43744/starterdb";

  mongoose.Promise = global.Promise;

  mongoose.connect(MONGO_URI);
  mongoose.connection
    .once("open", () =>
      console.log("Connected to MongoDB mLab DriveSchools instance.")
    )
    .on("error", error =>
      console.log(
        "Error connecting to mLab MongoDB DriveSchools instance:",
        error
      )
    );

  server.use(
    session({
      resave: true,
      saveUninitialized: true,
      secret: "aaabbbccc",
      store: new MongoStore({
        url: MONGO_URI,
        autoReconnect: true
      })
    })
  );

  server.use(
    "/graphql",
    expressGraphQL(req => ({
      schema,
      pretty: true,
      graphiql: true
    }))
  );

  server.use(handler).listen(5000);

  module.exports = server;
});

