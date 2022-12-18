const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Mentor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Application, { foreignKey: 'mentor_id' });
      this.hasMany(models.Review, { foreignKey: 'mentor_id' });
      this.hasMany(models.Favorite, { foreignKey: 'mentor_id' });
    }
  }
  Mentor.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    zoom: DataTypes.STRING,
    phone: DataTypes.STRING,
    price: DataTypes.INTEGER,
    password: DataTypes.TEXT,
    video: DataTypes.STRING,
    call: DataTypes.STRING,
    chat: DataTypes.STRING,
    education: DataTypes.STRING,
    job: DataTypes.STRING,
    profArea: DataTypes.STRING,
    profScill: DataTypes.STRING,
    aboutMe: DataTypes.TEXT,
    portfolio: DataTypes.STRING,
    photo: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Mentor',
  });
  return Mentor;
};
