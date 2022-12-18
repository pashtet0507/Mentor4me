const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Application extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Student, { foreignKey: 'student_id' });
      this.belongsTo(models.Mentor, { foreignKey: 'mentor_id' });
      this.hasMany(models.Status, { foreignKey: 'application_id' });
    }
  }
  Application.init({
    student_id: DataTypes.INTEGER,
    mentor_id: DataTypes.INTEGER,
    text: DataTypes.TEXT,
    data: DataTypes.INTEGER,
    video: DataTypes.STRING,
    chat: DataTypes.STRING,
    call: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Application',
  });
  return Application;
};
