import saveAndContinue from '../saveButton/saveButtonLocatorandData.json'

class savebutton{
    savebutton(){
        cy.wait(2000)
        cy.xpath(saveAndContinue.saveButton_continue).eq(0).click({force:true})
    }
} export default savebutton