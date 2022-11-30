import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('database','user','pass',{
  dialect: 'sqlite',
  host: './src/db/dev.sqlite'
});

module.exports = sequelize;
