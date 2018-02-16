const Sequelize = require("sequelize");
const sequelizedDb = new Sequelize("db", "db", "db", {
  host: "localhost",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelizedDb
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

const EdeeSourceModel = sequelizedDb.define(
  "edeeSourceData",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id"
    },
    sourceId: { type: Sequelize.INTEGER, field: "sourceId" },
    versionId: { type: Sequelize.INTEGER, field: "versionId" },
    name: { type: Sequelize.STRING, field: "name" },
    perex: { type: Sequelize.STRING, field: "perex" },
    content: { type: Sequelize.STRING, field: "content" },
    date: { type: Sequelize.DATE, field: "date" },
    author: { type: Sequelize.STRING, field: "author" },
    motiveId: { type: Sequelize.BIGINT, field: "motiveId" }
  },
  {
    freezeTableName: false,
    timestamps: false,
    underscored: false,
    tableName: "edee_source_data"
  }
);

const EdeeSourceData = sequelizedDb.models.edeeSourceData;
module.exports = EdeeSourceData;
