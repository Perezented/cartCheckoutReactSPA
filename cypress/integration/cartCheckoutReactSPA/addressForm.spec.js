/// <reference types="cypress" />

context("Should limit numbers that have specific length limits", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("zip, credit card, year, month, and cvCode have limits to how many numbers to type", () => {
    cy.contains("215");
    cy.get("#counter").first().type("4").should("have.value", "14");
    cy.get("540").should("not.exist");
    cy.get(".btn.btn-default.btn-sm.btn-block").click();
    cy.get("215").should("not.exist");
    cy.contains("540");
    cy.get(".glyphicon-trash").eq(1).click();
    cy.get("540").should("not.exist");
    cy.contains("470");
    cy.get(".btn.btn-success.btn-block").click();
    cy.contains(/billing address/i);
    cy.get("#firstName").type("FirstNameTest");
    cy.get("#lastName").type("LastNameTest");
    cy.get("#username").type("UsernameTest");
    cy.get("#address").type("123 Address rd.");
    cy.get("#country").select("United States");
    cy.get("#state").select("California");
    cy.get("#zip").type("123456123456");
    cy.get(".btn.btn-primary.btn-block").click();
    cy.get("#cardName").type("Card Name Here");
    cy.get("#cardNumber").type("12341234123412341234123412341234");
    cy.contains("12341234123412341234123412341234").should("not.exist");
    cy.get("#expityMonth").type("12222");
    cy.contains("12222").should("not.exist");
    cy.get("#expityYear").type("202222222");
    cy.contains("202222222").should("not.exist");
    cy.get("#cvCode").type("123456789");
    cy.contains("123456789").should("not.exist");
    cy.get(".btn.btn-secondary.btn-lg.btn-block").should("not.exist");
  });
});
