describe('Login/Logout Test', () => {
	before(function () {
		cy.visit('https://www.epicgames.com/store/en-US')
		cy.url().should('include', 'epicgames.com')
		cy.get('#user').click()
		cy.get('#login-with-epic').click()
	})
	it('should try to login with invalid data', () => {
		cy.get('.ModalBase-card').should('be.visible')
		cy.get('#email').type('Invalid username')
		cy.get('#password').type('Invalid password')
		cy.wait(15000)
		cy.get('#sign-in').click()
	})
})
