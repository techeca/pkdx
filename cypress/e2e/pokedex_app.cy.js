describe('Pokedex App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
  })

  it('Frontpage si carga', () => {
    cy.contains('Lista pokedex')
  })

  it('Pokedex Nacional puede ser expandida', () => {
    cy.contains('National').click()
  })
})
