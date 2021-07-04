/// <reference types="cypress" />

describe('As a user, I want to view related programs, so that I can have a list of program for selection', () => {
  const entryPoint = 'http://localhost:3000'
  beforeEach(() => {
    cy.visit(entryPoint)
  })

  //* Explore related button
  it('route to selected program type', () => {
    cy.get('button.ORCButton--secondary').click()
    cy.url().should(($url) => {
      expect($url).to.be.oneOf([`${entryPoint}/movie`, `${entryPoint}/series`])
    })
  })
})

describe('As a user, I want to view detail of the highlighted program, so that I can have better insight of the highlighted program', () => {
  const entryPoint = 'http://localhost:3000'
  beforeEach(() => {
    cy.visit(entryPoint)
  })

  //* View details button
  it('route to selected program type', () => {
    cy.get('.movie-details__cta > button.ORCButton--primary').click()
    cy.get('.ant-modal-confirm-info.ProgramDetailInfo').should('be.visible')
  })
})

describe('As a user, I want to have the navigate across different highlighted program, so that I can checkout what are the highlighted program availables', () => {
  const entryPoint = 'http://localhost:3000'
  beforeEach(() => {
    cy.visit(entryPoint)
  })

  //* View details button
  it('switch program content when clicked on carousel button', () => {
    let existingProgramTitle
    cy.get('.movie-details > .ant-typography').then(($title) => {
      existingProgramTitle = $title.text()
    })

    cy.get('.posterArt').trigger('mouseover')
    cy.get('.posterArt__overlay > button.ORCButton--primary').invoke('show')
    cy.get('.posterArt__overlay > button.ORCButton--primary.controller__right').click()
    cy.get('.movie-details > .ant-typography').then(($newTitle) => {
      const newTitle = $newTitle.text()
      expect(newTitle).not.equal(existingProgramTitle)
    })
  })
})

describe('As a user, I want to view detail of the highlighted programs, so that I can have better insight of the program', () => {
  const entryPoint = 'http://localhost:3000'
  beforeEach(() => {
    cy.visit(entryPoint)
  })

  //* View details button
  it('route to selected program type', () => {
    cy.get('.movie-details__cta > button.ORCButton--primary').click()
    cy.get('.ant-modal-confirm-info.ProgramDetailInfo').should('be.visible')
  })
})
