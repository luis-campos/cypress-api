import Ajv from 'ajv'
const ajv = new Ajv({ allErrors: true, verbose: true })

export const validateSchema = (jsonSchema, body) => {
    cy.fixture(jsonSchema).then((schema) => {
        const validate = ajv.compile(schema)
        const valid = validate(body)
        if (!valid) {
            throw new Error(`ERRO DE CONTRATO! \n ERRO: ${JSON.stringify(validate.errors)} \n BODY: ${JSON.stringify(body)}`)
        } else {
            Cypress.log({
                name: 'validateSchema',
                displayName: 'schema',
                message: `${jsonSchema} validado! \n ${JSON.stringify(body)}`
            })
        }
    })
}
