'use strict';

const { v4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Roles", [
      {
        id: v4(),
        name: "Usuário Comum",
        createdAt: "2022-03-11",
        updatedAt: "2022-03-11"
      },
      {
        id: v4(),
        name: "Administrador",
        createdAt: "2022-03-11",
        updatedAt: "2022-03-11"
      }
    ], {})
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Roles", null, {});
  }
};
