const saleService = require('../services/saleService');

const getAll = async (_req, res) => { 
  try {
    const result = await saleService.getAll();
    if (!result) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    return res.status(200).json(result);
  } catch (error) { 
    console.log(error);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await saleService.getById(id);
    if (!result || result.length < 1) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAll, getById };