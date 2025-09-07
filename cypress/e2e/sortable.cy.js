/// <reference types="cypress" />

// Ignora erros de scripts de terceiros (ex: Google Ads)
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('DemoQA Sortable - Ordem Crescente', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/sortable');
  });

  it('Organiza lista em ordem crescente', () => {
    cy.get('#demo-tab-list').click();

    // Primeiro, vamos desordenar a lista movendo o último item para o topo
    cy.get('#demo-tabpane-list .list-group-item').then((items) => {
      const dataTransfer = new DataTransfer();
      
      // Move 'Six' para o topo
      cy.get('#demo-tabpane-list .list-group-item').last()
        .trigger('dragstart', { dataTransfer })
        .trigger('dragleave');

      cy.get('#demo-tabpane-list .list-group-item').first()
        .trigger('dragover')
        .trigger('drop', { dataTransfer })
        .trigger('dragend');

      // Agora sim, vamos ordenar
      cy.get('#demo-tabpane-list .list-group-item').then((items) => {
        const textos = [...items].map((el) => el.innerText);
        const ordemEsperada = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

        // Ordena cada item para sua posição correta
        ordemEsperada.forEach((valor, index) => {
          const dataTransfer = new DataTransfer();

          cy.contains('#demo-tabpane-list .list-group-item', valor)
            .trigger('dragstart', { dataTransfer })
            .trigger('dragleave');

          cy.get(`#demo-tabpane-list .list-group-item:nth-child(${index + 1})`)
            .trigger('dragover')
            .trigger('drop', { dataTransfer })
            .trigger('dragend');
        });

        // Valida a ordem final
        cy.get('#demo-tabpane-list .list-group-item').then((itemsFinais) => {
          const final = [...itemsFinais].map((el) => el.innerText);
          expect(final).to.deep.equal(ordemEsperada);
        });
      });
    });
  });
});