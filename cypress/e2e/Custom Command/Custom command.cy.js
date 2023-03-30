///<reference types='cypress'/>

it('Should fill data payment',()=>{
    
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.get('#signin_button').click()
    cy.get('#user_login').type('username')
    cy.get('#user_password').type('password')
    cy.get('.btn').click()
    cy.get('#pay_bills_tab > a').click()
    //custom command pay-bills
    cy.pb()
})