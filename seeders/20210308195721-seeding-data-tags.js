'use strict';
const tags = require('../resources/tags.json')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const values = []
    for (let i = 0; i < tags.length; i++) {
      values.push({
        name: tags[i],
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    await queryInterface.bulkInsert('Tags', values, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tags', null, {});
  }
};
