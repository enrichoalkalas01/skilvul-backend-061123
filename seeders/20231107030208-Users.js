'use strict';
const Cryptr = require('cryptr')
const cryptr = new Cryptr

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let password = cryptr.encrypt('passwrd', 'secret')
    return queryInterface.bulkInsert('Users', [
      {
        username: 'enricho@example.com',
        password: password,
        email: 'enricho@example.com',
        firstname: 'enricho',
        lastname: 'alkalas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'lisa@example.com',
        password: password,
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
