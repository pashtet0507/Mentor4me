/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Mentors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      zoom: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      password: {
        type: Sequelize.TEXT,
      },
      video: {
        type: Sequelize.STRING,
      },
      call: {
        type: Sequelize.STRING,
      },
      chat: {
        type: Sequelize.STRING,
      },
      education: {
        type: Sequelize.STRING,
      },
      job: {
        type: Sequelize.STRING,
      },
      profArea: {
        type: Sequelize.STRING,
      },
      profScill: {
        type: Sequelize.STRING,
      },
      aboutMe: {
        type: Sequelize.TEXT,
      },
      portfolio: {
        type: Sequelize.STRING,
      },
      photo: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('Mentors');
  },
};
