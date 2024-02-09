import data6 from '../ApplicantExperiences/ApplicantExpLocatorsandData.json'

class appexp{
    appexp(){
        cy.get(data6.House_Road).eq(0).should('be.visible').type('House no-182, road no-12')
        cy.wait(2000)
        cy.get(data6.village).should('be.visible').type('Terokhadia Uttar para')
        cy.wait(2000)
        cy.get(data6.post_office).should('be.visible').type('6208')
        cy.wait(2000)
        cy.get(data6.Division).eq(0).click()
        cy.wait(2000)
        cy.xpath(data6.select_division).eq(0).click()
        cy.wait(2000)
        cy.get(data6.District).click()
        cy.wait(2000)
        cy.xpath(data6.select_district).click({force: true})
        cy.wait(2000)
        cy.get(data6.thana_upozilla).eq(0).click()
        cy.wait(2000)
        cy.xpath(data6.select_thana_upozilla).eq(0).click({force: true})
        cy.wait(2000)
        cy.screenshot()
    
    }

} export default appexp