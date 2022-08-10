const express = require('express');

const productController = require('../controllers/productController');
const { productNameValidation } = require('../middlewares/ProductNameAuth');

const productRouter = express.Router();

productRouter.get('/', productController.getAll);
productRouter.get('/:id', productController.getById);
productRouter.post('/', productNameValidation, productController.add);
productRouter.put('/:id', productNameValidation, productController.update);
productRouter.delete('/:id', productController.remove);

module.exports = productRouter;