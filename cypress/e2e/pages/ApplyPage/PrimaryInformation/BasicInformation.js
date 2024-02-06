import data3 from '../PrimaryInformation/ApplyInformationLocatorsandData.json'
class Applicant_Info{
    Applicant_Info(){

        cy.xpath(2000)
        cy.get(data3.radioButton).check('6', {force:true}).should('be.checked')
        cy.xpath(2000)
    }
} export default Applicant_Info