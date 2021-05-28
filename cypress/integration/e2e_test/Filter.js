describe('Filter', function () {
	beforeEach(function () {
		cy.visit('/browse')
	})
	it('Should able to filter by -Events: Epic MEGA Sale', function () {
		cy.get('[data-testid=egs-filter-sidebar]')
			.contains('Epic MEGA Sale')
			.click()
		cy.url().should('include', 'Epic%20MEGA')
	})
	it('Should be able to filter by -Price: Free', function () {
		cy.get('[data-testid=egs-filter-sidebar]').contains('Free').click()
		cy.url().should('include', 'Free')
	})
	it('Should able to filter by -Genre: Action', function () {
		cy.get('[data-testid=egs-filter-sidebar]').contains('Action').click()
		cy.url().should('include', 'Action') // => true
	})
	it('Should able to filter by -Genre: Open World', function () {
		cy.get('[data-testid=egs-filter-sidebar]').contains('Open World').click()
		cy.url().should('include', 'Open%20World') // => true
		cy.get('[data-testid=egs-filter-sidebar]').contains('Open World').click()
	})
	it('Should able to filter by -Genre: Shooter', function () {
		cy.get('[data-testid=egs-filter-sidebar]').contains('Shooter').click()
		cy.url().should('include', 'Shooter') // => true
		cy.get('[data-testid=egs-filter-sidebar]').contains('Shooter').click()
	})
})
