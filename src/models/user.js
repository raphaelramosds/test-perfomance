'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {}
  }
  User.init({
    firstName: DataTypes.STRING,
    email: DataTypes.STRING,
    id_role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.associate = (models) => {
    User.hasOne(models.Role, {
      foreignKey: "id_role"
    })
  }

  return User;
};