/// <reference types="cypress" />

context("Should move through the app completely", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Should move around the complete app", () => {
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
    cy.get("#zip").type("123456");
    cy.get(".btn.btn-primary.btn-block").click();
    cy.get("#cardName").type("Card Name Here");
    cy.get("#cardNumber").type("1234123412341234");
    cy.get("#expityMonth").type("12");
    cy.get("#expityYear").type("2022");
    cy.get("#cvCode").type("123");
    cy.get(".btn.btn-success.btn-lg.btn-block").click();
    cy.contains(/Order Confirmed/i);
    cy.contains(/Thank you for your order, FirstNameTest LastNameTest/i);
    cy.contains(/Shipping to address:/i);
    cy.contains(/FirstNameTest LastNameTest/i);
    cy.contains(/123 Address rd./i);
    cy.contains(/California United States 12345/i);
    cy.contains(/Standard delivery, 4-7 days estimated/i);
    cy.contains(/`14 of Product Name at 25.00`/i);
    cy.contains(/`2 of Product Name at 35.00`/i).should("not.exist");
    cy.contains(/`3 of Product Name 3 at 40.00`/i);
    cy.contains(/Total:/i);
    cy.contains(/470/i);
    cy.contains(/215/i).should("not.exist");
  });
});
