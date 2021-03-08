'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Taggables', {
      fields: ['VendorId'],
      type: 'foreign key',
      name: 'custom_fkey_VendorId',
      references: { //Required field
        table: 'Vendors',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Taggables', 'custom_fkey_VendorId')
  }
};
