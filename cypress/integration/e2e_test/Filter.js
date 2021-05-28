describe('Filter', function () {
	beforeEach(function () {
		cy.visit('/browse')
	})
	it('Should able to filter when click on Events : Epic MEGA Sale', function () {
		cy.get('[data-testid=egs-filter-sidebar]')
			.contains('Epic MEGA Sale')
			.click()
		cy.url().should('include', 'Epic%20MEGA')
	})
	it('Should be able to filter when click on Price : Free', function () {
		cy.get('[data-testid=egs-filter-sidebar]').contains('Free').click()
		cy.url().should('include', 'Free')
	})
	it('Should able to filter when click on genre: Action', function () {
		cy.get('[data-testid=egs-filter-sidebar]').contains('Action').click()
		cy.url().should('include', 'Action') // => true
	})
	it('Open World filter should be visible', function () {
		cy.get('[data-testid=egs-filter-sidebar]').contains('Open World').click()
		cy.url().should('include', 'Open%20World') // => true
		cy.get('[data-testid=egs-filter-sidebar]').contains('Open World').click()
	})
	it('Shooter filter should be visible', function () {
		cy.get('[data-testid=egs-filter-sidebar]').contains('Shooter').click()
		cy.url().should('include', 'Shooter') // => true
		cy.get('[data-testid=egs-filter-sidebar]').contains('Shooter').click()
	})
})
