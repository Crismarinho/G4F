// cypress/support/environments.js


export function setupEnv() {
  const environment = Cypress.env('environment') || 'teste'; // Ambiente principal de teste (padrão: 'teste')

  if (environment === 'teste') {
    const urlTeste = Cypress.env('url_teste'); // URL para o ambiente de teste principal
    if (urlTeste && urlTeste.front) {
      Cypress.env('URL', urlTeste.front); // Define a URL principal para o ambiente de teste
    } else {
      throw new Error('Variável de ambiente url_teste.front não está definida.');
    }

    // Corrigindo a configuração para o segundo ambiente (environment_1) e verificando a URL associada
    const environment1 = Cypress.env('environment_1') || 'test1'; // Ambiente secundário de teste (padrão: 'test1')
    const urlTeste1 = Cypress.env('url_teste_1'); // URL para o segundo ambiente de teste

    if (environment1 === 'test1') {
      if (urlTeste1 && urlTeste1.front) {
        Cypress.env('URL1', urlTeste1.front); // Define a URL para o segundo ambiente de teste
      } else {
        throw new Error('Variável de ambiente url_teste_1.front não está definida.');
      }
    } else {
      throw new Error('Ambiente não reconhecido: ' + environment1);
    }
  }
}
