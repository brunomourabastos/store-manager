const { expect } = require('chai')
const sinon = require('sinon')

const productModel = require('../../../models/productModel')
const productService = require('../../../services/productService')

describe('Obtém todos os dados de Products', () => {

  before(() => {
    const mockPayloadProduct = [{ id: 1, name: "Product1" }];
    sinon.stub(productModel, 'getAll').resolves(mockPayloadProduct);
  })

  after(() => {
    productModel.getAll.restore();
  });

  it("Verificar se é um array de retorno", async () => {
    const result = await productService.getAll();
    expect(result).to.be.a('array');
  });
});

describe('Obtém um produto baseado no id', () => {
  const mockPayloadProduct = [{ id: 1, name: "Produto1" }]
  const mockId = 1;

  before(() => {
    sinon.stub(productModel, 'getById').resolves(mockPayloadProduct);
  });

  after(() => {
    productModel.getById.restore();
  });

  it("Retorna um objeto com o id fornecido.", async () => {
    const [result] = await productService.getById(mockId);
    expect(result).to.be.a('object');
  })

})

describe('Ao inserir um novo produto no Banco de Dados', () => {
  describe('Quando é inserido com sucesso', () => {
    const productPayload = {
      name: 'Produto1'
    }

    before(() => {
      const ID_TEST = 1;
      sinon.stub(productModel, 'add').resolves({ id: ID_TEST });
    });

    after(() => {
      productModel.add.restore();
    })

    it('Retorna um objeto ao ser inserido com sucesso', async () => {
      const result = await productService.add(productPayload);
      expect(result).to.be.a('object');
    })

    it('Novo produto deve possuir a propriedade "id", gerada automaticamente', async () => {
      const result = await productService.add(productPayload);
      expect(result).to.have.a.property('id');
    });
  });
});