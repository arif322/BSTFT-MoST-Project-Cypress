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
        cy.xpath("//body/div[@id='root']/section[@class='ant-layout app-wrapper app-wrapper-front-end public-theme-wrapper']/section[@class='ant-layout main-layout']/main[@class='ant-layout-content content-wrapper content-wrapper-front-end']/div[@class='main-content']/div[@class='form-page-container form-page-container-BSTFT']/div[@class='container-fluid']/div[@class='ant-spin-nested-loading']/div[@class='ant-spin-container']/div[@class='ant-card ant-card-bordered mb-3 shadow']/div[@class='ant-card-body']/div[@role='tablist']/div[@id='step-1']/div[@role='tabpanel']/div[@class='ant-collapse-content-box']/form[@id='registrationForm']/div[@class='form-step-one-content']/div[1]").screenshot()
    }
} export default contactInfo