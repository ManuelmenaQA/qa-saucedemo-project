describe('Checkout Tests - SauceDemo', () => {

  beforeEach(() => {
    cy.login()
  })
  it('TC-14: Validar impuesto en checkout', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type("pepe")
    cy.get('[data-test="lastName"]').type("andrades")
    cy.get('[data-test="postalCode"]').type("22352")
    cy.get('[data-test="continue"]').click()

    cy.get('.summary_tax_label').should('exist')
  })

  it('TC-15: Validar total final (producto + tax)', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type("Test")
    cy.get('[data-test="lastName"]').type("User")
    cy.get('[data-test="postalCode"]').type("12345")
    cy.get('[data-test="continue"]').click()

    cy.get('.summary_subtotal_label').then(($subtotal) => {
      const subtotal = parseFloat($subtotal.text().replace('Item total: $', ''))

      cy.get('.summary_tax_label').then(($tax) => {
        const tax = parseFloat($tax.text().replace('Tax: $', ''))

        cy.get('.summary_total_label').then(($total) => {
          const total = parseFloat($total.text().replace('Total: $', ''))

          expect(total).to.equal(subtotal + tax)
        })
      })
    })
  })

  it('TC-16: Cancelar checkout', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="cancel"]').click()

    cy.url().should('include', 'cart.html')
  })

  it('TC-17: Checkout con carrito vacío (BUG)', () => {
    cy.get('[data-test="shopping-cart-link"]').click()

    cy.get('[data-test="checkout"]').click()

    cy.log('BUG DETECTADO: permite checkout con carrito vacío')

    // Esperamos que NO deje continuar (pero deja → fallará)
    cy.url().should('not.include', 'checkout-step-one.html')

   
  })


    
  })