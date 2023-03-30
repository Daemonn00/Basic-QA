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
Cypress.Commands.add('login',(username,password)=>{
    cy.clearCookies()
    cy.clearAllLocalStorage()
    cy.get('#user_login').clear()
    cy.get('#user_login').type(username)

    cy.get('#user_password').clear()
    cy.get('#user_password').type(password)
   
    cy.get('.btn').click()

})
// tugas custom command
Cypress.Commands.add('pb',()=>{
    cy.get('#sp_payee').select('Apple')
    cy.get('#sp_account').select('Checking')
    cy.get('#sp_amount').type('5000')
    cy.get('#sp_date').type('2023-01-20')
    cy.get(':nth-child(9) > .control-label').click()
    cy.get('#sp_description').type('Tagihan Mobil')
    cy.get('#pay_saved_payees').click()
})

//Force Visit
Cypress.Commands.add('forceVisit', url => {
    cy.window().then(win => {
        return win.open(url, '_self'); 
      });
});