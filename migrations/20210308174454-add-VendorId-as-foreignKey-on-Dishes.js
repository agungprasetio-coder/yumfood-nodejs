'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Dishes', // name of Target model
      'VendorId', // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Vendors', // name of Source model
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Dishes', 'VendorId')
  }
};
