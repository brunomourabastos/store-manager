const { expect } = require('chai')
const sinon = require('sinon')

const productModel = require('../../../models/productModel')
const connection = require('../../../helpers/connection')
const { proxyAuthRequired } = require('@hapi/boom')
const { array } = require('joi')

describe('Obtém todos os produtos', () => {
  const mockPayloadProduct = [{
    id: 1,
    name: 'Produto1'
  }, {
    id: 2,
    name: 'Produto2'
  }];
  
  before(async () => {
    await sinon.stub(connection, 'execute').resolves([mockPayloadProduct]);
  });

  after(async () => {
    connection.execute.restore();
  });

  it('Retorna um array', async () => {
    const result = await productModel.getAll();
    expect(result).to.be.a('array')
  });
});

describe("Obtem somente produto por ID", () => {
  const mockPayloadProduct = [{ id: 1, name: "Produto1" }];
  const mockId = 1;

  before(async () => {
    await sinon.stub(connection, 'execute').resolves([mockPayloadProduct])
  });

  after(async () => {
    connection.execute.restore();
  });

  it('Retorna um objeto com o id fornecido', async () => {
    const result = await productModel.getById(mockId);
    expect(result).to.be.a('object');
  })
});

describe('Insere um novo produto no Banco de Dados', () => {
  const payloadProduct = {
    name: 'Produto1'
  }

  before(async () => {
    const execute = [{ insterId: 1 }];
    sinon.stub(connection, 'execute').resolves(execute)
  })

  after(async () => {
    connection.execute.restore();
  })

  describe('Se o produto foi inserido com sucesso', () => {
    it('Deve retornar um objeto', async () => {
      const response = await productModel.add(payloadProduct);
      expect(response).to.be.a('object')
    })

    it('Deve ser gerado uma propriedade id automaticamente', async () => {
      const response = await productModel.add(payloadProduct);
      expect(response).to.have.a.property('id')
    })

  })
})