const db = require('../models/index');
const ProductDetailsModel = db.product_details;
const axios = require('axios');
const { json } = require('body-parser');
const saveExtraData = async (req, res) => {
    var extra_data = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    var send_extra_data = await axios.post('http://localhost:4000/api/test-product',
        extra_data.data,
    );
    res.status(200).json({
        message: extra_data.data
    });
}
const storeExtraData = async (req, res) => {
    const t = await db.sequelize.transaction();
    try {
        for (var i = 0; i < req.body.length; i++) {
            var save_data = {
                title: req.body[i].title,
                price: req.body[i].price,
                description: req.body[i].description,
                category: req.body[i].category,
                image: req.body[i].image,
                sold: req.body[i].sold,
                dateOfSale: req.body[i].dateOfSale
            }
            var result = await saveData(ProductDetailsModel, save_data, t);
        }
        await t.commit();
    } catch (error) {
        await t.rollback();
    }
    res.status(200).json(
        {
            message: "Ok"
        }
    );
}

const saveData = async (model, data_object, t) => {
    const save_data = await model.create(
        data_object,
        {
            transaction: t
        }
    );
    return true;
}
module.exports = {
    saveExtraData,
    storeExtraData
}
