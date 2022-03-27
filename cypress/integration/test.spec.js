/// <reference types="cypress" />

describe("Grupo de testes swagger PetStore", () => {
    it("Add a new pet to the store", () => {
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/pet',
            body: {
                "id": 0,
                "category": {
                    "id": 0,
                    "name": "string"
                },
                "name": "doggie",
                "photoUrls": [
                    "string"
                ],
                "tags": [
                    {
                        "id": 0,
                        "name": "string"
                    }
                ],
                "status": "available"
            }
        }).then(({ status, body }) => {
            expect(status).to.be.eql(200)
            cy.validateSchema('petSchema', body)
        })
    })

    it("Returns pet inventories by status", () => {
        cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/store/inventory'
        }).then(({ status, body}) => {
            expect(status).to.be.eql(200)
            cy.validateSchema('storeSchema', body)
        })
    })
})


// Given('I have a specific link_id', () => { })

// When('I do a search by link_id', () => {
//     PaymentLink.get_payment_link_link_id(linkId, header).then(res => {
//         cy.wrap({ res }).as('response')
//     })
// })

// Then('It should the response must have the short_id field', () => {
//     cy.get('@response').then(when => {
//         expect(when.res.body.short_id).to.exist
//     })
// })

// And('Return status code {int} {string}', (status, message) => {
//     cy.get('@response').then(when => {
//         expect(when.res.status).to.be.eql(status)
//         expect(when.res.statusText).to.be.eql(message)
//     })
// })