"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      team.belongsTo(models.user);
      team.belongsTo(models.player);
    }
  }
  team.init(
    {
      name: DataTypes.STRING,
      country: DataTypes.STRING,
      titles: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "team",
    }
  );
  return team;
};
