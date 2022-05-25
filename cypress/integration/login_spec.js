describe('Login page load', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://exercisedb.p.rapidapi.com/exercises', {
      statusCode: 200,
      fixture: 'exercises.json'
      })

    cy.intercept('GET', 'https://be-greek-god-bod.herokuapp.com//api/v1/user', {
      statusCode: 200,
      fixture: 'users.json'
      })

    cy.intercept('GET', 'https://be-greek-god-bod.herokuapp.com//api/v1/user/1', {
      statusCode: 200,
      fixture: 'pastWorkouts.json'
      })

      cy.intercept('GET', 'https://be-greek-god-bod.herokuapp.com//api/v1/user/null', {
      statusCode: 200,
      fixture: 'pastWorkouts.json'
      })

    cy.intercept('GET', 'https://be-greek-god-bod.herokuapp.com//api/v1/workouts', {
      statusCode: 200,
      fixture: 'suggestedWorkout.json'
    })


    cy.visit('http://localhost:3000/');
    })
    
    it('should display a login form with username, password, and login button', () => {
    cy.get('.username-input')
     .should('be.visible')

    cy.get('.password-input')
    .should('be.visible')

    cy.get('.login-button')
    .should('be.visible')
    })

    it('should display an App title', () => {
      cy.get('.title')
       .should('have.text', 'GREEK GOD BOD')
      })
  })