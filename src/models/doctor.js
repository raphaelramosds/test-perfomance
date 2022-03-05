'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    static associate(models) {

    }
  }
  Doctor.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    crm: DataTypes.STRING
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