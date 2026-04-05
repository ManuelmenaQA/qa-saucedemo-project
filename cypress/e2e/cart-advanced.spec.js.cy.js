describe('Cart Advanced Tests - SauceDemo', () => {

  beforeEach(() => {
    cy.login()
  })

  it('TC-11: Añadir múltiples productos al carrito', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
  })

  it('TC-12: Validar precio total', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type("Juan")
    cy.get('[data-test="lastName"]').type("Perez")
    cy.get('[data-test="postalCode"]').type("28001")
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="total-label"]').should('contain', 'Total: $43.18')
  })

   it('TC-13: Eliminar producto del carrito', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
  })

})