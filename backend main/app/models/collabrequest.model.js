module.exports = (sequelize, DataTypes) => {
  const CollaborationRequest = sequelize.define("CollaborationRequest", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    projectTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });

  // Associations
  CollaborationRequest.associate = (models) => {
    CollaborationRequest.belongsTo(models.User, { foreignKey: "ownerId" });
  };

  return CollaborationRequest;
};
