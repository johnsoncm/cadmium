const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {}

Event.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        locationName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        locationAddress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        time: {
            type: DataTypes.TIME,
            defaultValue: DataTypes.NOW,
        },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'events',
  }
);

module.exports = Event;