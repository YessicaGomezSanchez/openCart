// cypress/support/utils.js

Cypress.Commands.add('addProductToCart', (productName) => {
  // Click on the product by finding its text
  cy.contains(productName).click();

  // Wait for the loading animation to complete before adding the product to the cart
  cy.get('.loading').should('not.exist');

  // Add the product to the cart
  cy.get('.button-group button:nth-child(1)').each(($el) => {
    cy.wrap($el).click();
  });

  // Wait for the cart to update before proceeding
  cy.get('.alert').should('be.visible');
});
