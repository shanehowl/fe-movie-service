/// <reference types="cypress" />

describe('As a user, I want to view a list of movie, so that I can have list of movie selection', () => {
  const entryPoint = 'http://localhost:3000'
  beforeEach(() => {
    cy.visit(entryPoint)
  })

  //* Navigate to movie route by clicking on menu item
  it('route to /movie when clicked on menu item', () => {
    cy.get('[test-id= "ID__navigationHeader-routeMenu"] > #movie').click()
    cy.url().should('include', '/movie')
    cy.get('div.ProgramListing').should('be.visible')
  })
})

describe('As a user, I want to view a list of series, so that I can have list of series selection', () => {
  const entryPoint = 'http://localhost:3000'
  beforeEach(() => {
    cy.visit(entryPoint)
  })

  //* Navigate to movie route by clicking on menu item
  it('route to /series when clicked on menu item', () => {
    cy.get('[test-id= "ID__navigationHeader-routeMenu"] > #series').click()
    cy.url().should('include', '/series')
    cy.get('div.ProgramListing').should('be.visible')
  })
})

describe('As a user, I want to view a detail of a selected movie, so that I can have better insight of the selected movie', () => {
  const entryPoint = 'http://localhost:3000/movie'
  beforeEach(() => {
    cy.visit(entryPoint)
  })

  //* Navigate to movie route by clicking on menu item
  it('shows details of a selected movie when clicked on View details button', () => {
    cy.get('div.ProgramListing').should('be.visible')
    cy.get('.list-card')
      .first()
      .within(() => {
        cy.get('button.ORCButton--primary').click()
      })
    cy.get('.ant-modal-confirm-info.ProgramDetailInfo').should('be.visible')
  })
})

describe('As a user, I want to view a fun fact of a selected movie, so that I can get a fun fact of the selected movie', () => {
  const entryPoint = 'http://localhost:3000/movie'
  beforeEach(() => {
    cy.visit(entryPoint)
  })

  //* Navigate to movie route by clicking on menu item
  it('shows details of a selected movie when clicked on View details button', () => {
    cy.get('div.ProgramListing').should('be.visible')
    cy.get('.list-card')
      .first()
      .within(() => {
        cy.get('button.ORCButton--secondary').click()
        cy.request('GET', 'http://numbersapi.com/1996/year?json').then((resp) => {
          expect(resp.status).to.eq(200)
        })
      })
    cy.get('.ant-modal-confirm-info.FunFactInfo').should('be.visible')
  })
})

describe('As a user, I want to view a detail of a selected series, so that I can have better insight of the selected series', () => {
  const entryPoint = 'http://localhost:3000/series'
  beforeEach(() => {
    cy.visit(entryPoint)
  })

  //* Navigate to movie route by clicking on menu item
  it('shows details of a selected series when clicked on View details button', () => {
    cy.get('div.ProgramListing').should('be.visible')
    cy.get('.list-card')
      .first()
      .within(() => {
        cy.get('button.ORCButton--primary').click()
      })
    cy.get('.ant-modal-confirm-info.ProgramDetailInfo').should('be.visible')
  })
})

describe('As a user, I want to view a fun fact of a selected series, so that I can get a fun fact of the selected series', () => {
  const entryPoint = 'http://localhost:3000/series'
  beforeEach(() => {
    cy.visit(entryPoint)
  })

  //* Navigate to movie route by clicking on menu item
  it('shows details of a selected movie when clicked on View details button', () => {
    cy.get('div.ProgramListing').should('be.visible')
    cy.get('.list-card')
      .first()
      .within(() => {
        cy.get('button.ORCButton--secondary').click()
        cy.request('GET', 'http://numbersapi.com/1996/year?json').then((resp) => {
          expect(resp.status).to.eq(200)
        })
      })
    cy.get('.ant-modal-confirm-info.FunFactInfo').should('be.visible')
  })
})
