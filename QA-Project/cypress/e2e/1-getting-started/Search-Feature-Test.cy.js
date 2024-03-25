describe('Search Feature Tests', () => {
    beforeEach(() => {
        cy.visit('https://stacksinfo.web.app/'); 
    });
  
    // Valid Test Cases
    it('TC-01: Search for a valid keyword', () => {
        cy.get('input[class="search-bar"]').type('JavaScript{enter}'); 
        cy.get('.card').should('exist'); 
    });
  
    it('TC-02: Search for a valid city name', () => {
        cy.get('input[class="search-bar"]').type('Nablus{enter}'); 
        cy.get('.card').should('exist');
    });
  

    it('TC-03: Search for a category', () => {
        cy.get('input[class="search-bar"]').type('Web Development{enter}'); 
        cy.get('.card').should('exist');
    });

    it('TC-04: Search for a specific version', () => {
        cy.get('input[class="search-bar"]').type('React 11{enter}'); 
        cy.get('.card').should('exist');
    });
    it('TC-05: Search for a multiple keywords', () => {
        cy.get('input[class="search-bar"]').type('JavaScript React Node.js{enter}'); 
        cy.get('.card').should('exist');
    });
  
    // Invalid Test Cases
    it('TC-06: Search for an empty string', () => {
        cy.get('input[class="search-bar"]').type('{enter}'); 
        cy.get('.Not-found-container').should('exist'); 
    });
  
    it('TC-07: Search for a non-existent keyword', () => {
        cy.get('input[class="search-bar"]').type('XYZ{enter}'); 
        cy.get('.Not-found-container').should('exist'); 
    });
    it('TC-08: Search for an invalid company name', () => {
        cy.get('input[class="search-bar"]').type('Black Rock{enter}'); 
        cy.get('.Not-found-container').should('exist'); 
    });

    it('TC-09: Search for a category with invalid characters', () => {
        cy.get('input[class="search-bar"]').type('Web Development!#{enter}'); 
        cy.get('.Not-found-container').should('exist'); 
    });

    it('TC-10: Search for a multiple invalid keywords', () => {
        cy.get('input[class="search-bar"]').type('XYZ123!@{enter}'); 
        cy.get('.Not-found-container').should('exist'); 
    });

});

