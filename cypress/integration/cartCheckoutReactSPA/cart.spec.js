/// <reference types="cypress" />

context("Should contain cart page", () => {
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

  it("Should have a update cart button", () => {
    cy.contains(/update cart/i);
  });
  it("Should have a checkout button", () => {
    cy.contains(/checkout/i);
  });
});

context("Should remove items from the cart", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Should contain products in the cart", () => {
    cy.contains(/product name/i);
    cy.contains(/product description/i);
    cy.contains(/product name 2/i);
    cy.contains(/product description 2/i);
    cy.contains(/product name 3/i);
    cy.contains(/product description 3/i);
  });

  it("Should remove the first item in the cart", () => {
    cy.get(".glyphicon-trash").first().click();
    cy.get(".glyphicon-trash").contains("Product Name").should("not.exist");
  });
  it("Should remove the second item in the cart", () => {
    cy.get(".glyphicon-trash").eq(1).click();
    cy.get(".glyphicon-trash")
      .contains(/product name 2/i)
      .should("not.exist");
  });
  it("Should remove the last item in the cart", () => {
    cy.get(".glyphicon-trash").eq(2).click();
    cy.get(".glyphicon-trash")
      .contains(/product name 3/i)
      .should("not.exist");
  });

  it("Should remove all items from cart", () => {
    cy.get(".glyphicon-trash").first().click();
    cy.get(".glyphicon-trash").first().click();
    cy.get(".glyphicon-trash").first().click();
    cy.contains(/product description/i).should("not.exist");
  });
});

context("Should change item counts in the cart", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Should contain products in the cart", () => {
    cy.contains(/product name/i);
    cy.contains(/product description/i);
    cy.contains(/product name 2/i);
    cy.contains(/product description 2/i);
    cy.contains(/product name 3/i);
    cy.contains(/product description 3/i);
  });
  it("should change the count in cart and total should update", () => {
    cy.contains("215");
    cy.get("#counter").first().type("4").should("have.value", "14");
    cy.get("540").should("not.exist");
    cy.get(".btn.btn-default.btn-sm.btn-block").click();
    cy.get("215").should("not.exist");
    cy.contains("540");
    cy.get("#counter").first().clear().type("1").should("have.value", "10");
    cy.get("440").should("not.exist");
    cy.get(".btn.btn-default.btn-sm.btn-block").click();
    cy.get("540").should("not.exist");
    cy.contains("440");
    cy.get(".form-control.input-sm").eq(1).type("1").should("have.value", "21");
    cy.get("1105").should("not.exist");
    cy.get(".btn.btn-default.btn-sm.btn-block").click();
    cy.get("440").should("not.exist");
    cy.contains("1105");
  });
});
context(
  "Should change total when item counts are changed. Deleting item should remove from total as well.",
  () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/");
    });

    it("Should change the count in cart and total should update. Deleting item afterward to update total again", () => {
      cy.contains("215");
      cy.get("#counter").first().type("4").should("have.value", "14");
      cy.get("540").should("not.exist");
      cy.get(".btn.btn-default.btn-sm.btn-block").click();
      cy.get("215").should("not.exist");
      cy.contains("540");
      cy.get(".glyphicon-trash").eq(1).click();
      cy.get("540").should("not.exist");
      cy.contains("470");
    });
  }
);
