import data2 from "../BSTFTPages/BSTFTPageLocatorsandData.json"

class apply{
    applyProcess(){
        cy.wait(2000)
        cy.xpath(data2.services).scrollIntoView()
        cy.wait(2000)
        cy.xpath(data2.BSTFT).click()
        cy.wait(2000)
        cy.xpath(data2.Details).click()
        cy.wait(2000)
        cy.xpath(data2.apply).click()
        cy.wait(2000)
        // cy.xpath("//div[@id='step-1']//div[@role='tab']").click()
        cy.screenshot()
    }
} export default apply