describe('Search bar', function () {
	beforeEach(function () {
		cy.visit(Cypress.env('homePage'))
	})
	it('Should be visible', function () {
		cy.get('#searchInput').should('be.visible')
	})
	it('Should have a placeholder and search icon ', function () {
		cy.wait(1000)
		cy.get('#searchInput').should('have.attr', 'placeholder', 'Search')
	})
	it('Should be able to search', function () {
		cy.get('#searchInput').type('The Forgotten city').type('{enter}')
		cy.get('[data-testid="picture-image"]').should(
			'have.attr',
			'alt',
			'The Forgotten City'
		)
	})
	it('Clear should be enabled when there is a search input', function () {
		cy.get('#searchInput').type('Hi')
		cy.get('[aria-label="Clear Search"]').should('not.have.disabled')
	})
	it('Clear Should be disabled when there is no search input', function () {
		cy.get('[aria-label="Clear Search"]').should('be.disabled')
	})
})
