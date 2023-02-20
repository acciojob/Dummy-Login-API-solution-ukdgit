/// <reference types="cypress"/>

describe("#testcase 1: Check the form rendering ", () => {
  before(() => {
    cy.visit("http://localhost:8080");
  });

  it("should check if email input option is present", () => {
    cy.get("input#input-email").should("exist");
  });

  it("should check if password input option is present", () => {
    cy.get("input#input-password").should("exist");
  });

  it("Should check if the submit button is present", () => {
    cy.get("button#submit-form-btn").should("exist");
  });
});

describe("#testcase 2: Check form submissions ", () => {
  before(() => {
    cy.visit("http://localhost:8080");
  });
  
  it("handling correct form submission", () => {
    cy.get("input#input-email").type("abc@gmail.com");
    cy.get("input#input-password").type("12");
    cy.get("button#submit-form-btn").click();
    cy.wait(4000);
    cy.get("#user-error").should("have.text","")
    cy.get("#password-error").should("have.text","")

    cy.reload();
    cy.get("input#input-email").type("def@gmail.com");
    cy.get("input#input-password").type("1234");
    cy.get("button#submit-form-btn").click();
    cy.wait(4000);
    cy.get("#user-error").should("have.text","")
    cy.get("#password-error").should("have.text","")

    cy.reload();
    cy.get("input#input-email").type("ghi@gmail.com");
    cy.get("input#input-password").type("123456");
    cy.get("button#submit-form-btn").click();
    cy.wait(4000);
    cy.get("#user-error").should("have.text","")
    cy.get("#password-error").should("have.text","")
    cy.reload();
   
  });

  it("handling incorrect form submission", () => {
    cy.get("input#input-email").type("abcdefgh@gmail.com");
    cy.get("input#input-password").type("12");
    cy.get("button#submit-form-btn").click();
    cy.wait(4000);
    cy.get("#user-error").should("have.text","User not found")
    cy.get("#password-error").should("have.text","")
    cy.reload();
   
    cy.get("input#input-email").type("abc@gmail.com");
    cy.get("input#input-password").type("123");
    cy.get("button#submit-form-btn").click();
    cy.wait(4000);
    cy.get("#user-error").should("have.text","")
    cy.get("#password-error").should("have.text","Password Incorrect")
    cy.reload();

  

   
  });

  
});
