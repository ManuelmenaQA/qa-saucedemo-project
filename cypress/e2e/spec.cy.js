describe('Login - SauceDemo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('TC-01: Login con credenciales válidas', () => {
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce{enter}")
  })

  it('TC-02: Login con credenciales inválidas', () => {
    cy.get('[data-test="username"]').type("antonio90")
    cy.get('[data-test="password"]').type("antonio1490{enter}")
  })

  it('TC-03: Visualización de productos', () => {
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce{enter}")
  })

  it('TC-04: Añadir producto al carrito', () => {
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce{enter}")
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
  })
})