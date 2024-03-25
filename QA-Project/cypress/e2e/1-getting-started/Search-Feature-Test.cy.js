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

});

