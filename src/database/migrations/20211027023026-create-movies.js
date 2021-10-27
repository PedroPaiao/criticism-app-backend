'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('movies', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      category: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: [
          'action',
          'commedy',
          'fiction',
          'terror',
          'trending',
        ]
      },
      trailler_link: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image_link: {
        type: Sequelize.STRING,
        allowNull: false
      },
      year: {
        type: Sequelize.DATE,
        allowNull: false
      },
      director: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('movies')
  }
};
