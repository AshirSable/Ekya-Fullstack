module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define("profiles", {
      businessTitle: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      businessDescription: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      businessCoreValues: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      collaborationInterests: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
      milestones: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    });
  
    return Profile;
  };
  