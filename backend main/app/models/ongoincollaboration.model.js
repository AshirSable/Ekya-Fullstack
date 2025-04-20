module.exports = (sequelize, DataTypes) => {
  const OngoingCollaboration = sequelize.define("OngoingCollaboration", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    ownerId: { type: DataTypes.INTEGER, allowNull: false },
    senderId: { type: DataTypes.INTEGER, allowNull: false },
    projectTitle: { type: DataTypes.STRING, allowNull: false },
    ownerName: { type: DataTypes.STRING },
    collaboratorName: { type: DataTypes.STRING },
    ownerLogo: { type: DataTypes.STRING },
    collaboratorLogo: { type: DataTypes.STRING },
    ownerCompleted: { type: DataTypes.BOOLEAN, defaultValue: false },
    collaboratorCompleted: { type: DataTypes.BOOLEAN, defaultValue: false },
    status: {
      type: DataTypes.STRING,
      defaultValue: "in-progress" // or "completed" when both done
    }
  });

  return OngoingCollaboration;
};

