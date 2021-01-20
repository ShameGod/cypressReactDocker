describe('My First Test', () => {
  it('checks if the user can access the home page', () => {
    cy.visit("localhost:3000")
    cy.url().should("include", "localhost")
  })

  it('types something in the inputs and make sure we are redirected', () => {
    cy.visit("localhost:3000");
    cy.get("#username").type("Rida kejji")
    cy.get("#password").type("originalPassword")
    cy.get("#signIn").should('have.attr', 'href').then((href) => {
      cy.request(href).then((response) => {
        cy.log(response);
        expect(response.body).to.contains("wikipedia");
      })
    })
  })
})