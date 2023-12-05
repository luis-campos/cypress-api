/// <reference types="cypress" />
const PetBody = require("../bodies/petBodies");

const BASE_URL = "https://petstore.swagger.io/v2";

describe("Pet test group", () => {
  it("POST - Add a new pet to the store", () => {
    cy.request({
      method: "POST",
      url: `${BASE_URL}/pet`,
      body: PetBody.pet[0],
    }).then(({ status, body }) => {
      expect(status).to.be.eql(200);
      cy.validateSchema("petSchema", body);
    });
  });

  it("PUT - Update an existing pet", () => {
    cy.request({
      method: "PUT",
      url: `${BASE_URL}/pet`,
      body: PetBody.pet[1],
    }).then(({ status, body }) => {
      expect(status).to.be.eql(200);
      cy.validateSchema("petSchema", body);
    });
  });
});
