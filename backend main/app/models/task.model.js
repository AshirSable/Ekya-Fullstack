module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define("Task", {
      text: {
        type: DataTypes.STRING,
        allowNull: false
      },
      done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      collabId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  
    return Task;
  };