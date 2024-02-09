import data from '../loginPages/loginPageLocatorsandData.json'

class login{
    loginProcess(){

    cy.xpath(data.logPage).click()
    cy.wait(2000)
    cy.xpath(data.username).type(data.user_value)
    cy.wait(2000)
    cy.xpath(data.password).type(data.user_pass)
    cy.wait(2000)
    cy.xpath(data.submit).click()
    cy.wait(2000)
    cy.screenshot()

    }
}export default login