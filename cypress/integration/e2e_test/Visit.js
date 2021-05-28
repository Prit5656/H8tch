describe('Visit', () => {
	beforeEach(function () {
		cy.visit('/browse')
	})
	it('should load corect url', () => {
		cy.visit(Cypress.env('homePage'), { timeout: 25000 })
		cy.url().should('include', 'epicgames.com')
	})
})
