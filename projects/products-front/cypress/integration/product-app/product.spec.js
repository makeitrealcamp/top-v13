describe("Pruduct tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get('[data-test-id="email-input"]').type("test2@test.com");
    cy.get('[data-test-id="passwd-input"]').type("123");
    cy.get("button").click();
  });

  it("shoul render product page properly", () => {
    cy.url().should("include", "/products");
    cy.get(".row").children().should("to.have.length", 2);
    cy.get('[data-test-id="create-button"]').should(
      "to.have.text",
      "Create product"
    );
  });

  it("should show a product list", () => {
    cy.get('[data-test-id="card-list"]')
      .children()
      .should("to.have.length.of.at.most", 1);
  });

  it("show show the create product form", () => {
    cy.get('[data-test-id="create-button"]').click();
  });

  it("show create  a product", () => {});
});
