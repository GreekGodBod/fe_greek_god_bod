describe('Dashboard page load', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/dashboard/user/1');
    })
    
    it('should display a welcome message', () => {
    cy.get('.welcome-message')
     .should('have.text', 'Welcome, ')
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
  })