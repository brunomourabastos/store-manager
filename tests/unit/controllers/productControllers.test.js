const { expect } = require('chai')
const sinon = require('sinon')

const productService = require('../../../services/productService')
const productController = require('../../../controllers/productController')
const { execute } = require('../../../helpers/connection')

describe('Ao chamar o controller getAll', () => {
  describe('Quando há elementos', () => {
    const res = {};
    const req = {};
    const mockPayloadProduct = [{ id: 1, name: 'Product1' }]

    before(() => {
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns(mockPayloadProduct)
      sinon.stub(productService, 'getAll').resolves(mockPayloadProduct)
    })

    after(() => {
      productService.getAll.restore()
    })

    it('Verifica o retorno dos dados', async () => {
      await productController.getAll(req, res)
      expect(res.json.calledWith(mockPayloadProduct)).to.equal(true)
      expect(res.status.calledWith(200)).to.be.equal(true)
    })

  })
})

describe('Ao chamar controller getById', () => {
  const mockPayloadProduct = [{ id: 1, name: 'Product1' }]
  const res = {};
  const req = {};

  before(() => {
    res.status = sinon.stub().returns(res)
    res.json = sinon.stub().returns(mockPayloadProduct)
    req.params = "1";

    sinon.stub(productService, "getById").resolves(mockPayloadProduct)
  });

  after(() => {
    productService.getById.restore();
  })

  it("Verifica o retorno dos dados", async () => {
    await productController.getById(req, res);
    expect(res.json.calledWith(mockPayloadProduct)).to.equal(true)
  })
})

describe('Ao chamar o controller add', () => {
  describe('Quando produto é inserido com sucesso', async () => {
    const res = {};
    const req = {};

    before(() => {
      req.body = {
        name: 'Produto1'
      };

      res.status = sinon.stub().returns(res);
      res.send = sinon.stub().returns();

      sinon.stub(productService, 'add').resolves(true);
    })

    after(() => {
      productService.add.restore()
    })

    it('Ao ser adicionado com sucesso, deve informar status com código 201', async () => {
      await productController.add(req, res);
      expect(res.status.calledWith(201)).to.be.equal(true);
    })
    it('Ao ser adicionado com sucesso, deve informar o resultado como "object"', async () => {
      await productController.add(req, res);
      expect(res).to.be.a('object')
    })

  })

  describe('Quando o produto inserido não é válido', async () => {
    const res = {};
    const req = {};

    before(() => {
      req.body = {};

      res.status = sinon.stub().returns(res);
      res.send = sinon.stub().returns();

      sinon.stub(productService, 'add').resolves(false);
    });

    after(() => {
      productService.add.restore();
    });

    it('Quando produto inserido é inválido, é chamado o código 400', async () => {
      await productController.add(req, res);
      expect(res.status.calledWith(400)).to.be.equal(true);
    })

  })
})