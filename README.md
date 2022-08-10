# Store Manager

<details>
  <summary><strong>Contexto</strong></summary>

  Minha primeira API utilizando a arquitetura MSC baseado no Diagrama Entidade-Relacionamento (DER) !

  Diagrama está em ./public/erStoreManager.png

  A API foi construída para um sistema de gerenciamento de vendas no formato dropshipping em que será possível criar, visualizar, deletar e atualizar produtos e vendas. Foi utilizado o banco de dados MySQL para a gestão de dados. API Restful na arquitetura MSC bem como alguns testes para prática de QA.

  Feito utilizando docker para ambiente de desenvolvimento.

  <br />
</details>

## Tecnologias usadas

Back-end:
> Desenvolvido usando: Express.JS, MySql2, Joi, Chai, Mocha
> Testes: Chai, Mocha, Jest

#Informações importantes sobre o projeto

  - A pessoa usuária, independente de cadastro, consegue:
    - Adicionar, ler, deletar e atualizar produtos;
    - Enviar vendas para o sistema e essas vendas devem validar se o produto em questão existe;
    - Ler, deletar e atualizar vendas.

  - Cada camada da API está no seu respectivo diretório:
    - A camada **Models** está no diretório de nome `models`;
    - A camada **Services** está no diretório de nome `services`;
    - A camada **Controllers** está no diretório de nome `controllers`;
    - Os **Middlewares** estão no diretório de nome `middlewares`.

Para Criar e povoar o banco de dados, existem os arquivos migration.sql e seed.sql.

## Instalando Dependências

Para clonar:

```
git clone git@github.com:brunomourabastos/store-manager.git
```

> Backend
```
cd store-manager/ 
npm install
docker-compose up -d (precisa ter o docker instalado)
``` 

## Executando aplicação

* Para rodar o back-end:

  ```
  cd store-manager/ && npm start
  ```


## Executando Testes

* Para rodar todos os testes:

  ```
    npm test
  ```
