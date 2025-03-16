const dbConfig = require("../config/db.config.js");
const { Sequelize, DataTypes } = require("sequelize");

// Initialize Sequelize instance
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

// Initialize the database object before assigning models
const db = {};  
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.user = require("./user.model.js")(sequelize, DataTypes);
db.role = require("./role.model.js")(sequelize, DataTypes);
db.collaboration = require("./collaboration.model.js")(sequelize, DataTypes);
db.profile = require("./profile.model.js")(sequelize, DataTypes);
db.CollaborationRequest = require("./collabrequest.model.js")(sequelize, DataTypes);

// Define relationships
db.user.hasOne(db.profile, { foreignKey: "userId", onDelete: "CASCADE" });
db.profile.belongsTo(db.user, { foreignKey: "userId" });

db.user.hasMany(db.collaboration, { foreignKey: "userId" });
db.collaboration.belongsTo(db.user, { foreignKey: "userId" });

db.user.hasMany(db.CollaborationRequest, { foreignKey: "ownerId" });
db.CollaborationRequest.belongsTo(db.user, { foreignKey: "ownerId" });

module.exports = db;
