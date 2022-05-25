describe('Login page load', () => {
  beforeEach(() => {
    cy.intercept('GET', '', {
      statusCode: 200,
      fixture: 'users.json'
      })
    cy.visit('http://localhost:3000/');
    })
    
    it('should display a login form with username, password, and login button', () => {
    cy.get('.nameInput')
     .should('be.visible')
    })

  })