"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "teams",
      [
        {
          name: "Ajax",
          country: "NL",
          titles: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Barcelona",
          country: "ES",
          titles: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Juventus",
          country: "IT",
          titles: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Porto",
          country: "PT",
          titles: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "AZ Alkmaar",
          country: "NL",
          titles: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chelsea",
          country: "EN",
          titles: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Manchester United",
          country: "EN",
          titles: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("teams", null, {});
  },
};
