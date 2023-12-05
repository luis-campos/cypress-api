# Teste de Api e contrato com cypress

## Introdução
Criei este projeto para aprender um pouco sobre testes de APIs com Cypress.io e utilizei a API [PetStore](https://petstore.swagger.io/) como base.<br />
Framework de teste: [Cypress.io](https://www.cypress.io/) - ```13.4.0```<br />
Validador de Schema: [Ajv](https://ajv.js.org/) - ```8.11.0```<br />
Framework de report: [Mochawesome](https://www.npmjs.com/package/mochawesome) - ```7.1.3```

## Instalando dependências
1. Para instalar as dependências do projeto, execute o comando:
```
npm install --safe
```
## Executando os testes
2. Para executar os testes via interface gráfica, execute o comando:
```
npm run cypress
```
3. Para executar os testes no terminal, execute o comando:
```
npm test
```
4. Para executar os testes e gerar relatórios em html e json, execute o comando:
```
npm run reports
```
5. Para apagar relatórios antigos, execute o comando:
```
npm run clean:reports
```
6. Para apagar relatórios antigos e gerar novos, execute o comando:
```
npm run test:reports
```
