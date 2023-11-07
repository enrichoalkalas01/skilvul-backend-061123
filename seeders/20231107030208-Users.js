'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'enricho@example.com',
        password: '1sampai10',
        email: 'enricho@example.com',
        firstname: 'enricho',
        lastname: 'alkalas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'lisa@example.com',
        password: '1sampai10',
        email: 'lisa@example.com',
        firstname: 'lisa',
        lastname: 'mei',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
