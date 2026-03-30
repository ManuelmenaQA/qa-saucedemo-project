describe('Pruebas Negativas - SauceDemo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('TC-05: Login con usuario bloqueado', () => {
    cy.get('[data-test="username"]').type("locked_out_user")
    cy.get('[data-test="password"]').type("secret_sauce{enter}")
  })

  it('TC-06: Login con campos vacíos', () => {
    cy.get('[data-test="login-button"]').click()
  })

  it('TC-07 Login con contraseña incorrecta', () => {
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("wrong_password{enter}")
  })
})