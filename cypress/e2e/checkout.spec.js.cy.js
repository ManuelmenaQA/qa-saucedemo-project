describe('Checkout Tests - SauceDemo', () => {
  beforeEach(() => {
    cy.login()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
  })
   
  it('TC-08: Checkout completo correcto', () => {
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type("Antonio")
    cy.get('[data-test="lastName"]').type("Rueda alarcon")
    cy.get('[data-test="postalCode"]').type("29680")
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
  })

  it('TC-09: Checkout con campos vacíos', () => {
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="continue"]').click()
  })
  
  it('TC-10: Checkout con datos inválidos', () => {
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type("12345")
    cy.get('[data-test="lastName"]').type("67890")
    cy.get('[data-test="postalCode"]').type("ABCDE")
    cy.get('[data-test="continue"]').click()
    cy.log('BUG DETECTADO: el checkout permite datos inválidos')
    cy.get('[data-test="finish"]').should('not.exist')
  })

})