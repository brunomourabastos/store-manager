const saleModel = require('../models/saleModel');

const getAll = async () => {
  const result = await saleModel.getAll();
  if (!result) return [];
  return result;
};

const getById = async (id) => {
  const result = await saleModel.getById(id);
  if (!result) return [];
  return result;
};

module.exports = { getAll, getById };