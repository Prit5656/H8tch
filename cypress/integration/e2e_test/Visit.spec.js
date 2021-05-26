describe('Visit epic', () => {
	it('should load corect url', () => {
		cy.visit('https://www.epicgames.com/store/en-US/', { timeout: 25000 })
	})
	it('should check correct url', () => {
		cy.url().should('include', 'epicgames.com')
	})
})
