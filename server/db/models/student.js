const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Application, { foreignKey: 'student_id' });
      this.hasMany(models.Review, { foreignKey: 'student_id' });
      this.hasMany(models.Favorite, { foreignKey: 'student_id' });
    }
  }
  Student.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    zoom: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.TEXT,
    photo: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};
