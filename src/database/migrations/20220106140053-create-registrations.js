'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Registrations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      student_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'People', key: 'id' }
      },
      clazz_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Clazzes', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Registrations')
  }
}
