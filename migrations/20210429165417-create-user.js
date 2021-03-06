'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        notEmpty: true,
        notNull: true
     
      },
      email: {
        type: Sequelize.STRING,
        isEmail: true,
        notEmpty: true,
        notNull: true,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        notEmpty: true,
        notNull: true,
      },
      image: {
        type: Sequelize.STRING
       
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};