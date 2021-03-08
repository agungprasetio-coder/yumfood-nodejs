'use strict';
const { Vendor } = require('../models')
const dishes = require('../resources/dishes.json')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const vendors = await Vendor.findAll()
    const values = []
    while (values.length < 50) {
      for (let i = 0; i < dishes.length; i++) {
        values.push({
          name: dishes[i].name,
          VendorId: vendors[Math.floor(Math.random() * Math.floor(vendors.length))].id,
          createdAt: new Date(),
          updatedAt: new Date()
        })
      }
    }
    await queryInterface.bulkInsert('Dishes', values)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Dishes', null, {});
  }
};
