'use strict';
const orders = require('../resources/orders.json')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    orders.map(order => {
      order.createdAt = new Date()
      order.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('Orders', orders)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
