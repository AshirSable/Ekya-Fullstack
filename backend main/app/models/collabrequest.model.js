module.exports = (sequelize, DataTypes) => {
  const CollaborationRequest = sequelize.define("CollaborationRequest", {
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    senderUsername: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    collaborationTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "pending",
    },
    isSenderNotification: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    receiverName: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });

  return CollaborationRequest;
};
