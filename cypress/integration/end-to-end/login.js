/// <reference types="cypress" />

import faker from 'faker'
// const faker = require("faker")

describe('login', () => {
    beforeEach(() => {
        //TODO baseurl
    //  cy.visit('https://www.petz.com.br/')
     cy.visit('https://www.petz.com.br/login_LoginLoja.html')
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
        cy.get('#loginCliente').find('#email').should('be.visible').type(email_ok)
        cy.get('#loginCliente').find('#Senha').should('be.visible').type(senha_ok, {log:false})
        cy.get('#showPass').should('not.be.checked')
        cy.get('#manter').should('be.checked')
        cy.get('#loginCliente').find('input[type="submit"]').click()
        cy.get('.username').should('have.text',name_ok)
    })

    it('authenticate successfully with valid cpf and password', () => {

        //TODO pausa mouse para acessar um elemento dinâmico
        // cy.get('[class="login have-dropdown"]').trigger('mouseover',{force:true})
        // cy.get('.not-loggedin').should('be.visible').find('.button-login').click()

        cy.get('#loginCliente').find('#email').should('be.visible').type(cpf_ok)
        cy.get('#loginCliente').find('#Senha').should('be.visible').type(senha_ok, {log:false})
        cy.get('#showPass').should('not.be.checked')
        cy.get('#manter').should('be.checked')
        cy.get('#loginCliente').find('input[type="submit"]').click()
        cy.get('.username').should('have.text',name_ok)
    })

    it('authenticate unsuccessfully with invalid e-mail', () => {
        cy.log(email_nok)
        cy.get('#loginCliente').find('#email').type(email_nok).should('have.value',email_nok)
        cy.get('#loginCliente').find('#Senha').should('be.visible').type(senha_ok, {log:false})
        cy.get('#showPass').should('not.be.checked')
        cy.get('#manter').uncheck().should('not.be.checked')
        cy.get('#loginCliente').find('input[type="submit"]').click()
        cy.get('#loginCliente').should('be.visible').contains(alert_invalid_data)
    })

    it('authenticate unsuccessfully with invalid cpf', () => {
        cy.get('#loginCliente').find('#email').type(cpf_nok).should('have.value',cpf_nok)
        cy.get('#loginCliente').find('#Senha').should('be.visible').type(senha_ok, {log:false})
        cy.get('#showPass').should('not.be.checked')
        cy.get('#manter').uncheck().should('not.be.checked')
        cy.get('#loginCliente').find('input[type="submit"]').click()
        cy.get('#loginCliente').should('be.visible').contains(alert_invalid_data)
    })

    it('authenticate unsuccessfully with invalid password and valid e-mail', () => {
        cy.get('#loginCliente').find('#email').type(email_ok).should('have.value',email_ok)
        cy.get('#loginCliente').find('#Senha').should('be.visible').type(senha_nok, {log:false})
        cy.get('#showPass').should('not.be.checked')
        cy.get('#manter').uncheck().should('not.be.checked')
        cy.get('#loginCliente').find('input[type="submit"]').click()
        cy.get('#loginCliente').should('be.visible').contains(alert_invalid_data)
    })

    it('authenticate unsuccessfully with invalid password and valid cpf', () => {
        cy.get('#loginCliente').find('#email').type(cpf_ok).should('have.value',cpf_ok)
        cy.get('#loginCliente').find('#Senha').should('be.visible').type(senha_nok, {log:false})
        cy.get('#showPass').should('not.be.checked')
        cy.get('#manter').uncheck().should('not.be.checked')
        cy.get('#loginCliente').find('input[type="submit"]').click()
        cy.get('#loginCliente').should('be.visible').contains(alert_invalid_data)
    })

    it('authenticate unsuccessfully no fill data', () => {
        cy.get('#loginCliente').find('#email').should('have.value','')
        cy.get('#loginCliente').find('#Senha').should('have.value','')
        cy.get('#showPass').should('not.be.checked')
        cy.get('#manter').should('be.checked')
        cy.get('#loginCliente').find('input[type="submit"]').click()
        cy.get('#loginCliente').should('be.visible').contains(alert_invalid_data)
    })

    it('authenticate unsuccessfully with valid email and no fill password', () => {
        cy.get('#loginCliente').find('#email').should('be.visible').type(email_ok)
        cy.get('#loginCliente').find('#Senha').should('have.value','')
        cy.get('#showPass').should('not.be.checked')
        cy.get('#manter').should('be.checked')
        cy.get('#loginCliente').find('input[type="submit"]').click()
        cy.get('#loginCliente').should('be.visible').contains(alert_invalid_data)
    })

    it('authenticate unsuccessfully with valid cpf and no fill password', () => {
        cy.get('#loginCliente').find('#email').should('be.visible').type(cpf_ok)
        cy.get('#loginCliente').find('#Senha').should('have.value','')        
        cy.get('#showPass').should('not.be.checked')
        cy.get('#manter').should('be.checked')
        cy.get('#loginCliente').find('input[type="submit"]').click()
        cy.get('#loginCliente').should('be.visible').contains(alert_invalid_data)
    })



})