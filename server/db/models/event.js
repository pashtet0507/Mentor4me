const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Event.init({
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    title: DataTypes.STRING,
    text: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};
