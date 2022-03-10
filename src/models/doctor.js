'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    static associate(models) {}
  }
  Doctor.init({
    crm: DataTypes.STRING,
    id_user: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Doctor',
  });

  Doctor.associate = (models) => {
    Doctor.belongsToMany(models.Patient, {
      through: "Appointment", // tabela pivô
      as: "patients", // to many "patients"
      foreignKey: "id_patient" 
    });
  }

  return Doctor;
};