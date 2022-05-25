describe('Create Workout page load', () => {
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

    cy.visit('http://localhost:3000/createworkout/user/1');
    })

    it('should display a header called Create Your Workout', () => {
      cy.get('.page-title')
       .should('have.text', 'Create Your Workout')
      })

    it('should display a sub header', () => {
      cy.get('.begin-text')
        .should('have.text', 'Select a muscle group, then click on exercises to add!')
      })
      
    it('should display a back to dashboard button', () => {
      cy.get('.back-to-dashboard-button')
        .should('have.text', 'Back to Dashboard')
      })
        
    it('should display a dropdown menu', () => {
      cy.get('.exercise-form')
        .contains('abs')
      })

    it('should be able to select a workout from the dropdown', () => {
      cy.get('.select-category')
        .select('abs')
      })

    it('should display ab workouts', () => {
      cy.get('.select-category')
        .select('abs')
    })

})
