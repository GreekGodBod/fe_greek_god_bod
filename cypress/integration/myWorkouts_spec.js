describe('My workouts page load', () => {
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

    cy.visit('http://localhost:3000/myworkouts/user/1');
    })

    it('should display a header', () => {
      cy.get('.page-title')
        .should('have.text', 'My Workouts')
      })

    it('should display a workout', () => {
      cy.get('.workout-name')
        .should('have.text', 'killer chest day')
      })

    it('should display a back to dashboard button', () => {
      cy.get('.back-to-dashboard-button')
      .should('have.text', 'Back to Dashboard')
    })

    it('should display a start workout  button', () => {
      cy.get('.start-workout-button')
      .should('have.text', 'Start Workout')
    })

    it('should be able to start workout', () => {
      cy.get('.start-workout-button')
      .click()
    })

    it('should display that workout', () => {
      cy.get('.start-workout-button')
      .click()

    })
})