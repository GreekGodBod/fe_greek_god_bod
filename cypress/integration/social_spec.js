describe('Social page load', () => {
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

    it('should be able to log in', () => {
      cy.get('.username-input')
      .type('user_1')
      .get('.password-input')
      .type('password1')
      .get('.login-button')
      .click()
    })

    it('should be able to click on Social', () => {
      cy.get('.username-input')
      .type('user_1')
      .get('.password-input')
      .type('password1')
      .get('.login-button')
      .click()
      cy.get('.social-button')
      .click()
    })

    it('should display a header', () => {
      cy.get('.username-input')
      .type('user_1')
      .get('.password-input')
      .type('password1')
      .get('.login-button')
      .click()
      cy.get('.social-button')
      .click()
      cy.get('.page-title')
      .contains('Social')
    })

    it('should display a form to submit a message', () => {
      cy.get('.username-input')
      .type('user_1')
      .get('.password-input')
      .type('password1')
      .get('.login-button')
      .click()
      cy.get('.social-button')
      .click()
      cy.get('.chat-input-field')
      .type('hello')
    })
  })