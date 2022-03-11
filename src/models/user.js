'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    id_role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.associate = (models) => {
    User.belongsTo(models.Role);
    User.hasOne(models.Patient, {
      foreignKey: "id_user"
    });
    User.hasOne(models.Doctor, {
      foreignKey: "id_user"
    });
  }

  return User;
};