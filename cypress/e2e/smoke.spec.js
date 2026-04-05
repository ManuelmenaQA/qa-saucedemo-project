describe('Smoke Tests - SauceDemo', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Login funciona correctamente', () => {
    cy.url().should('include', 'inventory')
  })

  it('Productos se muestran en la pantalla', () => {
    cy.get('.inventory_item').should('exist')
  })

  it('Añadir un producto al carrito funciona', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('contain', '1')
  })

})