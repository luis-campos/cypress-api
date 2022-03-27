import Ajv from 'ajv'
const ajv = new Ajv({ allErrors: true, verbose: true })

export const validateSchema = (jsonSchema, body) => {
    cy.fixture(jsonSchema).then((schema) => {
        const validate = ajv.compile(schema)
        const valid = validate(body)
        if (!valid) {
            console.log(validate.errors).then(() => {
                throw new Error('Erro de contrato!')
            })
        } else {
            Cypress.log({
                name: 'validateSchema',
                displayName: 'schema',
                message: `${jsonSchema} validado!`
            })
        }
    })
}