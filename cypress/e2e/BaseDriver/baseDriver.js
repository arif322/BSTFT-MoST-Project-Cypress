
class openUrl{
    openUrl(){
        cy.visit('tr-services.most.gov.bd')
        cy.screenshot()
        cy.reload()
    }
} export default openUrl