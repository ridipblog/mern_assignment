const router = require('express').Router();
const bodyParser = require('body-parser');
const cors = require('cors');
router.use(cors());
const encoded = bodyParser.urlencoded({ extended: true });
const ProductController = require('../controllers/ProductController');
router.get('/save-extra-data', ProductController.saveExtraData);
router.post('/test-product', encoded, ProductController.storeExtraData);
module.exports = router;
