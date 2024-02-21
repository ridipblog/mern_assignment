'use strict';
const { text } = require('body-parser');
const {
    Model, STRING, FLOAT, DATE, BOOLEAN, TEXT
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProductDetails extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    ProductDetails.init({
        title: {
            type: STRING,
            allowNull: false
        },
        price: {
            type: FLOAT,
            allowNull: false
        },
        description: {
            type: TEXT,
            allowNull: false
        },
        category: {
            type: STRING,
            allowNull: false
        },
        image: {
            type: STRING,
            allowNull: false
        },
        sold: {
            type: BOOLEAN,
            allowNull: false
        },
        dateOfSale: {
            type: DATE,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'ProductDetails',
        tableName: 'productdetails'
    });
    return ProductDetails;
};
