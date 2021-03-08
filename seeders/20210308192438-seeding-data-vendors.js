'use strict';
const faker = require('faker')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const vendors = []
    for (let i = 0; i < 10; i++) {
      vendors.push({
        name: faker.company.companyName(),
        logo: faker.image.imageUrl(100, 100, 'food', true, true),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    await queryInterface.bulkInsert('Vendors', vendors, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Vendors', null, {});
  }
};
