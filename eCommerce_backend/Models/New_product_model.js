const{Sequelize,DataTypes} = require('sequelize')
const sequelize = require('../db')

const ecom_new_product = sequelize.define('ecom_new_product', {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false
    },
    sale_price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  });

module.exports = ecom_new_product;