describe('Visit', () => {
	it('should load corect url', () => {
		cy.visit('/')
		cy.wait(5000)
		cy.url().should('include', 'epicgames.com')
	})
})
