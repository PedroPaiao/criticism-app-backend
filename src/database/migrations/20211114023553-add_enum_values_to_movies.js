'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const newValues = [
      'action',
      'commedy',
      'fiction',
      'terror',
      'trending',
      'drama',
      'thriller'
    ]
    queryInterface.sequelize.query("ALTER TYPE enum_movies_category ADD VALUE 'drama';");
    return queryInterface.sequelize.query("ALTER TYPE enum_movies_category ADD VALUE 'thriller';");
  },

  down: async (queryInterface, Sequelize) => {
    const oldValues = [
      'action',
      'commedy',
      'fiction',
      'terror',
      'trending',
    ]
    return queryInterface
      .changeColumn('movies', 'category', {
        type: Sequelize.ENUM,
        values: oldValues
      });
  }
};
