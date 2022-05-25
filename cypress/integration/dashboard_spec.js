describe('Dashboard page load', () => {
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

      cy.visit('http://localhost:3000/dashboard/user/1');
      })

    it('should display a button labeled Social', () => {
      cy.get('.social-button')
       .should('have.text', 'Social')
      })

    it('should display a button labeled Create Workout', () => {
      cy.get('.create-workout-button')
        .should('have.text', 'Create Workout')
      })

    it('should display a button labeled Suggested Workouts', () => {
      cy.get('.suggested-button')
        .should('have.text', 'Suggested Workouts')
      })

    it('should display a button labeled My Workouts', () => {
      cy.get('.my-workout-button')
        .should('have.text', 'My Workouts')
      })

    it('should display an image for the user', () => {
      cy.get('.profile-pic')
        .should('be.visible')
      })
  })