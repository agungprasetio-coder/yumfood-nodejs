'use strict';
const {Vendor, Tag} = require('../models')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const vendors = await Vendor.findAll()
    const tags = await Tag.findAll()
    const values = []
    while(values.length < 50) {
      for (let i = 0; i < vendors.length; i++) {
        values.push({
          VendorId: vendors[i].id,
          TagId: tags[Math.floor(Math.random() * Math.floor(tags.length))].id,
          createdAt: new Date(),
          updatedAt: new Date()
        })
      }
    }
    await queryInterface.bulkInsert('Taggables', values, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Taggables', null, {});
  }
};
