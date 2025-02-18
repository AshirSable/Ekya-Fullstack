module.exports = (sequelize, Sequelize) => {
    const Collaboration = sequelize.define("collaboration", {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      revenueShared: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      timePeriod: {
        type: Sequelize.STRING,
        allowNull: false,
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
  