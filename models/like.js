'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.like.belongsTo(models.book, {
        foreignKey: 'book_id',
      });
      models.like.belongsTo(models.user, {
        foreignKey: 'user_id',
      });
    }
  }
  like.init(
    {
      user_id: DataTypes.INTEGER,
      book_id: DataTypes.INTEGER,
      isLike: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'like',
    },
  );
  return like;
};
