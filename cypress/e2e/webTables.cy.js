/// <reference types="cypress" />

// Ignora erros de scripts de terceiros (ex: Google Ads)
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Teste Web Tables', () => {
  beforeEach(() => {
    // Visita direto a página de Web Tables
    cy.visit('https://demoqa.com/webtables', { timeout: 120000 });
  });

  it('Deve criar um novo registro', () => {
    cy.get('#addNewRecordButton').click();
    cy.get('#firstName').type('Maria');
    cy.get('#lastName').type('Luciano');
    cy.get('#userEmail').type('maria.luciano@test.com');
    cy.get('#age').type('38');
    cy.get('#salary').type('10000');
    cy.get('#department').type('QA');
    cy.get('#submit').click();

    // Valida se o usuário foi criado na tabela
    cy.contains('Maria').should('be.visible');
  });

  it('Deve editar um registro existente', () => {
    // Garante que o registro existe antes de editar
    cy.contains('Kierra').should('be.visible');
    cy.get('[title="Edit"]').eq(2).click();
    cy.get('#age').clear().type('40');
    cy.get('#submit').click();
  });

  it('Deve deletar um registro', () => {
    // Garante que o registro existe antes de deletar
    cy.contains('Kierra').should('be.visible');

    cy.contains('Kierra').parent().within(() => {
      cy.get('[title="Delete"]').click();
    });

    cy.contains('Kierra').should('not.exist');
  });
});