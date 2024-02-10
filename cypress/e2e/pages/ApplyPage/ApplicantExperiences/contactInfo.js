import data7 from '../ApplicantExperiences/contactInfoLocatorandData.json'

class contactInfo{
    contactInfo(){
        cy.wait(2000)
        cy.xpath(data7.inside).check('INSIDE_BANGLADESH',{force:true}).should('be.checked')
        cy.wait(5000)
        cy.xpath(data7.outside).check('OUTSIDE_BANGLADESH', {force: true}).should('be.checked')
        cy.wait(4000)
        cy.xpath(data7.inside).check('INSIDE_BANGLADESH',{force:true}).should('be.checked')
        cy.wait(2000)
        cy.xpath(data7.checkbox).click()
        cy.wait(2000)
        cy.get(data7.alter_mobile).type('01704831363').should('be.visible')
        cy.wait(2000)
        cy.xpath(data7.skype).type('arif@yopmail.com')
        cy.wait(2000)
        cy.screenshot()
    }
} export default contactInfo