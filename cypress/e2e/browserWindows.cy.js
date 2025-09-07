/// <reference types="cypress" />

// Ignora erros de scripts de terceiros (ex: Google Ads)
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Teste - Browser Windows', () => {
  it('Abre uma nova aba e valida mensagem', () => {
    // 1. Visita a página principal
    cy.visit('https://demoqa.com/browser-windows');

    // 2. Clica no botão para abrir nova janela
    cy.get('#windowButton').should('be.visible').click();

    // 3. Stub para abrir na mesma aba
    cy.window().then((win) => {
      cy.stub(win, 'open').callsFake((url) => {
        win.location.href = url;
      });
    });

    // 4. Clica novamente para garantir que abre na mesma aba
    cy.get('#windowButton').click();

    // 5. Valida que a mensagem está visível na nova página
    cy.contains('This is a sample page').should('be.visible');
  });
});