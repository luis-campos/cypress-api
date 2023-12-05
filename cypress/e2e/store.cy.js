/// <reference types="cypress" />
const PetBody = require("../bodies/petBodies");

const BASE_URL = "https://petstore.swagger.io/v2";

describe("Store test group", () => {
  it("GET - Returns pet inventories by status", () => {
    cy.request({
      method: "GET",
      url: `${BASE_URL}/store/inventory`,
    }).then(({ status, body }) => {
      expect(status).to.be.eql(200);
      cy.validateSchema("storeSchema", body);
    });
  });
});
