module.exports = (sequelize, Sequelize) => {
    const Collaboration = sequelize.define("collaboration", {
      title: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      skills:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      roles: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      revenueShared: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      timePeriod: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users", // Reference to the Users table
          key: "id",
        },
      },
    });
  
    return Collaboration;
  };
  