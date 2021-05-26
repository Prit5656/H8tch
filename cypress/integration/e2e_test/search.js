describe('Search bar', function () {
	it('Should be visible', function () {})
	it('Should have a placeholder and search icon ', function () {
		cy.visit('https://www.epicgames.com/store/en-US').as('visit')
		//cy.wait('@visit').its('status').should('equal', 200)
		cy.wait(1000)
		cy.get('#searchInput').should('have.attr', 'placeholder', 'Search')
	})
	it.only('Should be diabled when there is no search', function () {
		cy.visit('https://www.epicgames.com/store/en-US')
		//cy.wait('@visit').its('status').should('equal', 200)
		cy.wait(1000)
		cy.get('[data-testid=search-bar]').should(
			'have.attr',
			'placeholder',
			'Search'
		)
		cy.get('.SearchBar-searchOpenButton_840538aa')
	})
})
