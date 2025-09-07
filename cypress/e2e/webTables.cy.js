/// <reference types="cypress" />

// Ignora erros de scripts de terceiros (ex: Google Ads)
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Gerenciamento de Registros em Tabela Web', () => {
  beforeEach(() => {
    // Visita direto a página de Web Tables
    cy.visit('https://demoqa.com/webtables', { timeout: 120000 });
  });

  it('Adicionar Novo Registro', () => {
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

  it('Editar Registro Existente', () => {
    // Garante que o registro existe antes de editar
    cy.contains('Kierra').should('be.visible');
    cy.get('[title="Edit"]').eq(2).click();
    cy.get('#age').clear().type('40');
    cy.get('#submit').click();
  });

  it('Deletar Registro', () => {
    // Garante que o registro existe antes de deletar
    cy.contains('Kierra').should('be.visible');

    cy.contains('Kierra').parent().within(() => {
      cy.get('[title="Delete"]').click();
    });

    cy.contains('Kierra').should('not.exist');
  });

  it('Criar 12 Novos Registros Dinamicamente', () => {
    // Aumenta a quantidade de registros exibidos na tabela
    cy.get('select[aria-label="rows per page"]').select('20');

    for (let i = 1; i <= 12; i++) {
      cy.get('#addNewRecordButton').click();

      cy.get('#firstName').type(`Nome${i}`);
      cy.get('#lastName').type(`Sobrenome${i}`);
      cy.get('#userEmail').type(`teste${i}@email.com`);
      cy.get('#age').type(`${20 + i}`);
      cy.get('#salary').type(`${3000 + i * 100}`);
      cy.get('#department').type(`Depto${i}`);

      cy.get('#submit').click();
    }

    // Valida se todos os novos registros aparecem na tabela
    for (let i = 1; i <= 12; i++) {
      cy.contains(`Nome${i}`).should('be.visible');
    }
  });

  it('Deletar os 12 Registros Criados', () => {
  // Aumenta a quantidade de registros exibidos na tabela
  cy.get('select[aria-label="rows per page"]').select('20');

  // Percorre todas as linhas e deleta apenas as que têm "Nome"
  cy.get('.rt-tr-group').each(($row) => {
    if ($row.text().includes('Nome')) {
      cy.wrap($row).within(() => {
        cy.get('[title="Delete"]').click();
      });
    }
  });

  // Valida que não existe mais nenhum "NomeX" na tabela
  for (let i = 1; i <= 12; i++) {
    cy.contains(`Nome${i}`).should('not.exist');
  }
 });

});
