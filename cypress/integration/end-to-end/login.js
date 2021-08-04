/// <reference types="cypress" />

import faker from 'faker'


describe('login', () => {
    beforeEach(() => {
    //  cy.visit('https://www.petz.com.br/')
     cy.visit('login_LoginLoja.html')
     cy.get('#aceiteLgpd').click()
    })

        const email_ok = "tutor-pet@azwaz.site"
        const cpf_ok = 85194179812
        const senha_ok = "Pet*2021"
        const name_ok = "Tutor"
        const email_nok = faker.lorem.words(2)
        const cpf_nok = faker.datatype.number(11)
        const senha_nok = faker.datatype.number(5)
        const alert_invalid_data = "Dados incorretos!"

        //TODO usar 'Context' para segmentar os testes

    it('authenticate successfully with valid email and password', () => {

        //TODO pausa mouse para acessar um elemento dinâmico
        // cy.get('[class="login have-dropdown"]').trigger('mouseover') 
        // cy.get('.button-login').click()
        
        cy.login(email_ok, senha_ok)
        cy.get('.username').should('have.text',name_ok)
    })

    it('authenticate successfully with valid cpf and password', () => {

        //TODO pausa mouse para acessar um elemento dinâmico
        // cy.get('[class="login have-dropdown"]').trigger('mouseover',{force:true})
        // cy.get('.not-loggedin').should('be.visible').find('.button-login').click()

        cy.login(cpf_ok, senha_ok)
        cy.get('.username').should('have.text',name_ok)
    })

    it('authenticate unsuccessfully with invalid e-mail', () => {
        cy.login(email_nok, senha_ok)
        cy.get('#loginCliente').contains(alert_invalid_data).should('be.visible')
    })

    it('authenticate unsuccessfully with invalid cpf', () => {
        cy.login(cpf_nok, senha_ok)
        cy.get('#loginCliente').contains(alert_invalid_data).should('be.visible')
    })

    it('authenticate unsuccessfully with invalid password and valid e-mail', () => {
        cy.login(email_ok, senha_nok)       
        cy.get('#loginCliente').contains(alert_invalid_data).should('be.visible')
    })

    it('authenticate unsuccessfully with invalid password and valid cpf', () => {
        cy.login(cpf_ok, senha_nok)       
        cy.get('#loginCliente').contains(alert_invalid_data).should('be.visible')
    })

    it('authenticate unsuccessfully no fill data', () => {
        cy.login('', '')       
        cy.get('#loginCliente').should('be.visible')
    })

    it('authenticate unsuccessfully with valid email and no fill password', () => {        
        cy.login(email_ok, '')       
        cy.get('#loginCliente').should('be.visible')
    })

    it('authenticate unsuccessfully with valid cpf and no fill password', () => {
        cy.login(cpf_ok, '') 
        cy.get('#loginCliente').should('be.visible')
    })



})