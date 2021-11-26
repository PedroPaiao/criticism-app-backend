'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'criticizes',
      'user_id',
      {
       type: Sequelize.INTEGER,
       references: {
          model: 'users', // 'Movies' would also work
          key: 'id'
        }
      }
    );
    queryInterface.removeColumn(
      'criticizes',
      'user',
    );
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'criticizes',
      'user_id',
    );
    queryInterface.addColumn(
      'criticizes',
      'user',
      {
        type: Sequelize.STRIN
      }
    );
  }
};
