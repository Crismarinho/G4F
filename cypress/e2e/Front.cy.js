describe.only('Desafio Automação', () => {
    // Adiciona uma visita inicial antes de cada teste
    beforeEach(() => {
        cy.visit(Cypress.env('URL'));
    })
    it('CT01 -Valida o elemento Sign in na tela inicial', () => {
        cy.contains('Sign in').should('be.visible'); // Valida o elemento 'Sing in' esta na tela   
    })
    it('CT02 - Direciona para a página de autenticação', () => {
        cy.get('.login').click()
        // Valida se a URL atual é exatamente igual à esperada
        cy.url().should('eq', Cypress.env('URL1'));
    
    })
    it('CT03 - Valida se os elementos:Logotipo, Authentication e Create an account estão na página  ', () => {
        cy.visit(Cypress.env('URL1'));
        cy.get('.logo').should('be.visible');
        cy.get('.page-heading').should('contain.text', 'Authentication');
        cy.get('#create-account_form').should('be.visible');
        cy.get('#login_form > .page-subheading').should('contain.text','Already registered?');
            })
});
