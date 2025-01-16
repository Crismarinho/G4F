const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');

// Função para carregar variáveis de ambiente
function loadEnv() {
  const envPath = path.resolve(__dirname, '..', 'environments.js');
  if (fs.existsSync(envPath)) {
    require(envPath).env();
  }
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Carregar variáveis de ambiente antes de retornar a configuração
      loadEnv();
      return config;
    },
    experimentalRunAllSpecs: true,
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 10000,
    viewportHeight: 720,
    viewportWidth: 1600
  }

});
