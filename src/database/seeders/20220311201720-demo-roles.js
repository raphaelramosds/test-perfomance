'use strict';
const { v4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Roles", [
      {
        id: v4(),
        name: "Usuário Comum",
        created_at: Date.now(),
        updated_at: Date.now()
      },
      {
        id: v4(),
        name: "Administrador",
        created_at: Date.now(),
        updated_at: Date.now()
      }
    ], {})
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Roles", null, {});
  }
};
