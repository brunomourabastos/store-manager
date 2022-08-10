const productModel = require('../models/productModel');

const getAll = async () => {
  const result = await productModel.getAll();
  if (!result) return [];
  return result;
};

const getById = async (id) => {
  const result = await productModel.getById(id);
  if (!result) return [];
  return result;
};

const add = async (name) => {
  if (!name) return [];

  const result = await productModel.add(name);
  return result;
};

const update = async (id, name) => {
  const result = await productModel.update(id, name);
  return result;
};

const remove = async (id) => {
  const result = await productModel.remove(id);
  return result;
};

module.exports = { getAll, getById, add, update, remove };