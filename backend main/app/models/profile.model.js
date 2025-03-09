module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define("profiles", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    businessName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    businessLogo: {
      type: DataTypes.STRING, // Store as URL or base64
      allowNull: true,
    },
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
    businessImage: {
      type: DataTypes.STRING, // Store as URL or base64
      allowNull: true,
    },
    aboutTitle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    servicesDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    servicesHeroImage: {
      type: DataTypes.STRING, // Store as URL or base64
      allowNull: true,
    },
    businessDomain: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    preferredCollaborationSectors: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    collaborationInterests: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    milestones: {
      type: DataTypes.ARRAY(DataTypes.JSON), // [{ text: "", image: "" }]
      allowNull: true,
    },
  });

  return Profile;
};
