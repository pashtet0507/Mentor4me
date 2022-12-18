const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Mentor, { foreignKey: 'mentor_id' });
      this.belongsTo(models.Student, { foreignKey: 'student_id' });
    }
  }
  Review.init({
    student_id: DataTypes.INTEGER,
    mentor_id: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
