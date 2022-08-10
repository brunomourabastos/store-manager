const productService = require('../services/productService');

const getAll = async (_req, res) => {
  try {
    const result = await productService.getAll();
    if (!result) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await productService.getById(id);
    if (!result || result.length < 1) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const add = async (req, res) => {
  try {
    const { name } = req.body;
    const result = await productService.add(name);

    if (!result) {
      return res.status(400).json({ message: 'Invalid Product' });
    }
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
};

const update = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;

    const result = await productService.update(id, name);

    const product = await productService.getById(id);
    if (!product || product.length < 1) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await productService.remove(id);

    if (!result || result === undefined) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(204).end();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAll, getById, add, update, remove };