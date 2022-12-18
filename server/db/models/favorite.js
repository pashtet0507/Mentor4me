const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Student, { foreignKey: 'student_id' });
      this.belongsTo(models.Mentor, { foreignKey: 'mentor_id' });
    }
  }
  Favorite.init({
    student_id: DataTypes.INTEGER,
    mentor_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};
