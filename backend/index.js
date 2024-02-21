const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors({}));
const encoded = bodyParser.urlencoded({ extended: true });
app.use(encoded);
app.use(express.json());

const ProductRoutes = require('./routes/ProductRoute');
app.use('/api/', ProductRoutes);
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("Server running ");
});
