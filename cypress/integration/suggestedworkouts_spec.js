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
      
    cy.visit('http://localhost:3000/suggestedworkouts/user/1');
    })
    
    it('should display a header', () => {
    cy.get('.page-title')
     .should('have.text', 'Suggested Workouts')
    })

    it('should display a back to dashboard button', () => {
      cy.get('.back-to-dashboard-button')
       .should('have.text', 'Back to Dashboard')
      })

    it('should display a sub header for what the suggested workout is', () => {
      cy.get('.suggested-workout-message')
        .should('have.text', "Today\'s suggested workout is 'killer back day'!")
      })

    it('should display the suggested workout', () => {
      cy.get('.name-container')
        .should('have.text', "alternate lateral pulldown")
      })

    it('should display a gif for the suggested workout', () => {
      cy.get('.suggested-gif')
        .should('be.visible')
      })

    it('should display a button for adding to workouts', () => {
      cy.get('.add-suggested-workout')
        .should('have.text', 'Add to My Workouts')
      })

    it('should be able to add to workouts', () => {
      cy.get('.add-suggested-workout')
        .should('have.text', 'Add to My Workouts')
        .click()
      })

    it('should display a popup after the workout has been added', () => {
      cy.get('.add-suggested-workout')
        .should('have.text', 'Add to My Workouts')
        .click()

      cy.get('.created-notification')
        .should('have.text', 'Your workout has been added!')
      })
  })