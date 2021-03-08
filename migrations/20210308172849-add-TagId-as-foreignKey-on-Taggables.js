'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Taggables', {
      fields: ['TagId'],
      type: 'foreign key',
      name: 'custom_fkey_TagId',
      references: { //Required field
        table: 'Tags',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Taggables', 'custom_fkey_TagId')
  }
};
