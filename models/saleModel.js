const connection = require('../helpers/connection');

const getAll = async () => {
  const [rows] = await connection.execute(
    `SELECT saleProduct.sale_id AS saleId,
     sale.date,
     saleProduct.product_id AS productId,
     saleProduct.quantity 
     FROM StoreManager.sales_products AS saleProduct
     INNER JOIN StoreManager.sales AS sale ON saleProduct.sale_id = sale.id
     ORDER BY saleId ASC, productId ASC;`,
  );
  return rows;
};

const getById = async (id) => { 
  const [row] = await connection.execute(
    `SELECT sale.date,
    saleProduct.product_id AS productId,
    saleProduct.quantity
    FROM StoreManager.sales_products AS saleProduct
    INNER JOIN StoreManager.sales as sale ON saleProduct.sale_id = sale.id 
    WHERE sale_id = ?`, [id],
  );
  return row;
};

module.exports = { getAll, getById };