
/// <reference types="cypress" />

// Ignora erros de scripts de terceiros (ex: Google Ads)
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

/// <reference types="cypress" />

describe('Formulário DemoQA', () => {
  it('Preenche e faz upload de arquivo', () => {
    cy.visit('https://demoqa.com/automation-practice-form');

    cy.get('#firstName').type('Maria');
    cy.get('#lastName').type('Luciano');
    cy.get('#userEmail').type('maria@email.com');
    cy.get('input[name="gender"][value="Female"]').check({force: true});
    cy.get('#userNumber').type('6825277156');

    // Data de nascimento
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('1986');
    cy.get('.react-datepicker__month-select').select('September');
    cy.get('.react-datepicker__day--006:not(.react-datepicker__day--outside-month)').click();

    //input Subjects
    cy.get('.subjects-auto-complete__value-container').type('Maths{enter}');

    // Hobbies
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label').click();

    // Upload do arquivo
    cy.get('#uploadPicture').attachFile('desafioQA.txt');

    // Current Address
    cy.get('#currentAddress').type('Rua dos Bobos, 0');

    // State and City
    cy.get('#state').click().get('#react-select-3-option-0').click();
    cy.get('#city').click().get('#react-select-4-option-0').click();

    // Submeter
    cy.get('#submit').click();

    // Confirma que o popup de sucesso apareceu
    cy.get('.modal-content').should('be.visible');
    cy.contains('Thanks for submitting the form').should('be.visible');

  });
});