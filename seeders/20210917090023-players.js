"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "players",
      [
        {
          name: "Overmaars",
          age: 25,
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Davids",
          age: 22,
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Robben",
          age: 20,
          teamId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cantona",
          age: 23,
          teamId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ronaldo",
          age: 21,
          teamId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ronaldo",
          age: 20,
          teamId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Henry",
          age: 24,
          teamId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Stam",
          age: 30,
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Puyol",
          age: 28,
          teamId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Figo",
          age: 26,
          teamId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Zidane",
          age: 27,
          teamId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Barthez",
          age: 38,
          teamId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Messi",
          age: 19,
          teamId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maradona",
          age: 37,
          teamId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Raul",
          age: 29,
          teamId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Thuram",
          age: 28,
          teamId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maldini",
          age: 40,
          teamId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cannavaro",
          age: 31,
          teamId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Del Piero",
          age: 27,
          teamId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Casillas",
          age: 26,
          teamId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ronaldinho",
          age: 23,
          teamId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("players", null, {});
  },
};
