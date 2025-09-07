/// <reference types="cypress" />

// Ignora erros de scripts de terceiros (ex: Google Ads)
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Teste Progress Bar', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/progress-bar');
  });

  it('Deve parar antes de 25%', () => {
    cy.get('#startStopButton').click(); // inicia
    cy.get('#progressBar')
        .invoke('text')
        .then((value) => {
    const percent = parseInt(value.replace('%', ''), 20);
    expect(percent).to.not.be.NaN;
    expect(percent).to.be.at.most(25);
  });

    cy.get('#startStopButton').click(); // parar
  });

   it('Deve completar até 100% e resetar', () => {
    // Inicia
    cy.get('#startStopButton').click();

    // Aguarda até 100% (até 200s)
    cy.get('#progressBar', { timeout: 200000 })
      .should(($bar) => {
        const value = $bar.text().trim();
        expect(value).to.eq('100%');
      });

    // Aguarda o botão de reset e clica
    cy.get('#resetButton', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Verifica se a barra foi resetada
    cy.get('#progressBar')
      .should('contain', '0%');
  });



});

