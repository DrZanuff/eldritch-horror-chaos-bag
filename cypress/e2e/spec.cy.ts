/// <reference types="cypress" />
describe('Start Game', () => {
  it('should be able to visit the app and options are available', () => {
    cy.visit('https://eldritch-horror-chaos-bag.netlify.app/')

    cy.contains('Select an Ancient One')
    cy.contains('Select Number of Players')
    cy.contains('Select a Language')
  })

  it('should visits the app and it is possible to select Ancient One and number of players', () => {
    cy.visit('https://eldritch-horror-chaos-bag.netlify.app/')

    cy.get('#select-ao-input').click()
    cy.contains('Azathoth').click()

    cy.get('#select-players-input').click()
    cy.contains('Four').click()
  })

  it('should be able to start a new game', () => {
    cy.visit('https://eldritch-horror-chaos-bag.netlify.app/')

    cy.clearLocalStorage('saveGame')
    cy.get('#select-ao-input').click()
    cy.contains('Azathoth').click()

    cy.get('#select-players-input').click()
    cy.contains('Four').click()

    cy.contains('New Game').click()

    cy.contains('Yes').click()
  })

  it('should be able to take a token', () => {
    cy.visit('https://eldritch-horror-chaos-bag.netlify.app/')

    cy.get('#select-ao-input').click()
    cy.contains('Azathoth').click()

    cy.get('#select-players-input').click()
    cy.contains('Four').click()

    cy.contains('New Game').click()

    cy.contains('Yes').click()

    cy.contains('Get Token').click()

    cy.get('.tokens-taken > div').children().should('have.length', 1)
  })
})
