/// <reference types="cypress" />

describe('login', () => {
    beforeEach(() => {
    //  cy.visit('https://www.petz.com.br/')
     cy.visit('https://www.petz.com.br/login_LoginLoja.html')
     cy.get('#aceiteLgpd').click()
    })

        const email_ok = "tutor-pet@azwaz.site"
        const cpf_ok = 85194179812
        const senha_ok = "Pet*2021"
        const name_ok = "Tutor"

    it('authenticate successfully with email', () => {

        //TODO pausa mouse para acessar um elemento dinâmico
        // cy.get('[class="login have-dropdown"]').trigger('mouseover') 
        // cy.get('.button-login').click()
        cy.get('#loginCliente').find('#email').should('be.visible').type(email_ok)
        cy.get('#loginCliente').find('#Senha').should('be.visible').type(senha_ok)
        cy.get('#showPass').should('not.be.checked')
        cy.get('#manter').should('be.checked')
        cy.get('#loginCliente').find('input[type="submit"]').click()
        cy.get('.username').should('have.text',name_ok)
    })

    it('authenticate successfully with cpf', () => {

        //TODO pausa mouse para acessar um elemento dinâmico
        // cy.get('[class="login have-dropdown"]').trigger('mouseover') 
        // cy.get('.button-login').click()
        cy.get('#loginCliente').find('#email').should('be.visible').type(cpf_ok)
        cy.get('#loginCliente').find('#Senha').should('be.visible').type(senha_ok)
        cy.get('#showPass').should('not.be.checked')
        cy.get('#manter').should('be.checked')
        cy.get('#loginCliente').find('input[type="submit"]').click()
        cy.get('.username').should('have.text',name_ok)
    })
})