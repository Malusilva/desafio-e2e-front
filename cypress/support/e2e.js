// cypress/support/e2e.js

// Aqui você pode registrar comandos customizados ou hooks globais
// Exemplo:
// beforeEach(() => {
//   cy.log("Rodando antes de cada teste!");
// })

e2e: {
  specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
}


import './commands';
import 'cypress-file-upload';

require('cypress-xpath');