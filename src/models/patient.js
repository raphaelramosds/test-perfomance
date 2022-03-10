'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    static associate(models) {}
  }
  Patient.init({
    id_user: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Patient',
  });

  Patient.associate = (models) => {
    Patient.belongsToMany(models.Doctor, {
      through: "Appointment",
      as: "doctors",
      foreignKey: "id_doctor"
    });
  }

  return Patient;
};