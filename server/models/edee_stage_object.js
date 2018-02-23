const Sequelize = require("sequelize");
const sequelizedDb = require("./edee_mysql");

const EdeeStageObjectModel = sequelizedDb.define(
  "edeeStageObject",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id"
    },
    stageId: { type: Sequelize.INTEGER, field: "stageId" },
    objectId: { type: Sequelize.INTEGER, field: "objectId" },
    objectType: { type: Sequelize.STRING, field: "objectType" },
    name: { type: Sequelize.STRING, field: "name" },
    sourceId: { type: Sequelize.INTEGER, field: "sourceId" },
    lang: { type: Sequelize.STRING, field: "lang" },
    webId: { type: Sequelize.INTEGER, field: "webId" },
    pagetreeId: { type: Sequelize.INTEGER, field: "pagetreeId" },
    pageTreeSortOrder: { type: Sequelize.INTEGER, field: "pageTreeSortOrder" },
    sectionSortOrder: { type: Sequelize.DOUBLE, field: "sectionSortOrder" },
    systemId: { type: Sequelize.STRING, field: "systemId" },
    dataType: { type: Sequelize.STRING, field: "dataType" },
    sourceType: { type: Sequelize.STRING, field: "sourceType" },
    prototype: { type: Sequelize.STRING, field: "prototype" },
    objectDate: { type: Sequelize.DATE, field: "objectDate" },
    created: { type: Sequelize.DATE, field: "created" },
    // changed: { type: Sequelize.DATE, field: "changed" },

    url: { type: Sequelize.STRING, field: "url" }
  },
  {
    freezeTableName: false,
    timestamps: false,
    underscored: false,
    tableName: "stage_object"
  }
);

EdeeStageObjectModel.hasMany(EdeeStageSourceModel);

const EdeeStageObject = sequelizedDb.models.edeeStageObject;

module.exports = EdeeStageObject;
