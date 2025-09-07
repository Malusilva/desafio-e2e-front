/// <reference types="cypress" />

// Ignora erros de scripts de terceiros (ex: Google Ads)
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Manipulação de Janelas do Navegador', () => {
  it('Abrir Nova Aba', () => {
    // Visita a página principal
    cy.visit('https://demoqa.com/browser-windows');

    // Clica no botão para abrir nova janela
    cy.get('#windowButton').should('be.visible').click();

    // Stub para abrir na mesma aba
    cy.window().then((win) => {
      cy.stub(win, 'open').callsFake((url) => {
        win.location.href = url;
      });
    });

    // Clica novamente para garantir que abre na mesma aba
    cy.get('#windowButton').click();

    //  Valida que a mensagem está visível na nova página
    cy.contains('This is a sample page').should('be.visible');
  });
});