'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  book.init(
    {
      title: DataTypes.STRING,
      authors: DataTypes.STRING,
      url: DataTypes.STRING(1234),
      description: DataTypes.STRING(1234),
      publisher: DataTypes.STRING,
      cover_img: DataTypes.STRING(1234),
      price: DataTypes.INTEGER,
      like_count: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'book',
    },
  );
  return book;
};
