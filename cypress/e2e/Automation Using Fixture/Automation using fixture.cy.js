///<reference types='cypress'/>
describe('Web Visit Automation', ()=>{
beforeEach(()=>{    
    cy.visit('/',{timeout:5000})
    cy.clearAllCookies
    cy.clearAllLocalStorage
    cy.clearAllSessionStorage
    cy.clearCookies
})
it('Should visit website',()=>{
    // cy.visit('https://www.saucedemo.com')
    
    cy.pause()
    cy.url().should('include','saucedemo')
});
it('Should try login w/ data 1',()=>{
    cy.fixture('swaglabs').then(swaglabs=>{
    const username=swaglabs.username1
    const password=swaglabs.password1

    // cy.visit('https://www.saucedemo.com/')
    cy.url().should('include','saucedemo')
    cy.get('#user-name').type(username)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
    cy.get('.title').should('be.visible')
    })
})

it('Should try login w/ data 2',()=>{
    cy.fixture('swaglabs').then(swaglabs=>{
    const username=swaglabs.username2
    const password=swaglabs.password1

    // cy.visit('https://www.saucedemo.com/')
    cy.url().should('include','saucedemo')
    cy.get('#user-name').type(username)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
    })
})

it('Should try login w/ data 3',()=>{
    cy.fixture('swaglabs').then(swaglabs=>{
    const username=swaglabs.username3
    const password=swaglabs.password1

    // cy.visit('https://www.saucedemo.com/')
    cy.url().should('include','saucedemo')
    cy.get('#user-name').type(username)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
    })
})

it('Should try login w/ data 4',()=>{
    cy.fixture('swaglabs').then(swaglabs=>{
    const username=swaglabs.username4
    const password=swaglabs.password1

    // cy.visit('https://www.saucedemo.com/')
    cy.url().should('include','saucedemo')
    cy.get('#user-name').type(username)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
    })
})

})