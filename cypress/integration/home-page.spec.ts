/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('As a user, I want to have a header navigation on all pages, so that I can navigate between different pages', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  //* Navigation Header
  it('displays page title', () => {
    cy.get('[test-id= "ID__navigationHeader"] .ant-typography').should('have.text', 'ORC Program')
  })

  it('display program type as menu item selection', () => {
    cy.get('[test-id= "ID__navigationHeader-routeMenu"] > li').should(($lis) => {
      expect($lis).to.have.length(5)
      expect($lis.eq(1), 'third item').to.have.class('ant-menu-item-only-child').to.contain('Movie')
      expect($lis.eq(3), 'third item')
        .to.have.class('ant-menu-item-only-child')
        .to.contain('Series')
    })
  })

  it('route to /movie when clicked on menu item', () => {
    cy.get('[test-id= "ID__navigationHeader-routeMenu"] > #movie').click()
    cy.url().should('include', '/movie')
  })
  it('route to /series when clicked on menu item', () => {
    cy.get('[test-id= "ID__navigationHeader-routeMenu"] > #series').click()
    cy.url().should('include', '/series')
  })
  it('route to / when clicked on title', () => {
    cy.get('[test-id= "ID__navigationHeader"] a').click()
    cy.url().should('include', '/')
  })
})
