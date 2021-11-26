'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'criticizes',
      'movie_id',
      {
       type: Sequelize.INTEGER,
       references: {
          model: 'movies', // 'Movies' would also work
          key: 'id'
        }
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('criticizes', 'movie_id')
  }
};
