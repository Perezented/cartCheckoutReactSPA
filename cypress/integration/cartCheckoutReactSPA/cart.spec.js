/// <reference types="cypress" />

context("Window", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Should open up window, looking for shopping cart text", () => {
    cy.contains(/shopping cart/i);
  });
  it("Should contain nav items", () => {
    cy.contains(/cart/i);
    cy.contains(/checkout/i);
  });

  it("Should contain products in the cart", () => {
    cy.contains(/product name/i);
    cy.contains(/product description/i);
    cy.contains(/product name 2/i);
    cy.contains(/product description 2/i);
    cy.contains(/product name 3/i);
    cy.contains(/product description 3/i);
  });

  it("Should have a update cart button", () => {
    cy.contains(/update cart/i);
  });
  it("Should have a checkout button", () => {
    cy.contains(/checkout/i);
  });
});
