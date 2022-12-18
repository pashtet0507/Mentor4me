const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Student, { foreignKey: 'application_id' });
    }
  }
  Status.init({
    application_id: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    comments: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Status',
  });
  return Status;
};
