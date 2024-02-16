
class openUrl{
    openUrl(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Returning false here prevents Cypress from failing the test
            return false
          })
        cy.visit('https://tr-services.most.gov.bd')
        cy.wait(2000)
        cy.screenshot()
        cy.reload()
    }
} export default openUrl