const Sequelize = require("sequelize");
const sequelizedDb = require("./edee_mysql");

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
