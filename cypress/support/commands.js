// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => { 
    if (email != '')
        cy.get('#loginCliente').find('#email').should('be.visible').type(email)
    
    if (password != '') 
        cy.get('#loginCliente').find('#Senha').should('be.visible').type(password,{log:false})
    
    const show_pass = (email == '' | password == '')? cy.get('#showPass').check() : cy.get('#showPass').should('not.be.checked') 
    
    if (show_pass)
     cy.get('#loginCliente').find('input[type="submit"]').click()
})