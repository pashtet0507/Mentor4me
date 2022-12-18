/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      student_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Students',
          },
          key: 'id',
        },
      },
      mentor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Mentors',
          },
          key: 'id',
        },
      },
      comment: {
        type: Sequelize.TEXT,
      },
      rating: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reviews');
  },
};
