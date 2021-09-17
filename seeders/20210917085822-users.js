"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Eunice Mabi",
          email: "mabi@man.com",
          password: "tetu",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "karli verly",
          email: "verly@ghohst.com",
          password: "kara",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
