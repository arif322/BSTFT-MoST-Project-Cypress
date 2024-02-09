import data5 from '../PrimaryInformation/ApplyInformationLocatorsandData.json'

class birthdate{
    birthdate(){
        // cy.xpath(data5.birthday).click()
        // cy.wait(2000)
        // const birthdate = Cypress.moment().subtract(30, 'years'); // Example: 30 years ago
        // const month = birthdate.format('MMMM'); // Get month name
        // const day = birthdate.format('D'); // Get day of month
        // const year = birthdate.format('YYYY'); // Get year

        // // Click on the month and select the birth month
        // cy.get('.ant-picker-panel').contains(day).click();

        // // Click on the day in the calendar
        // cy.get('.ant-picker-panel').contains(month).click();

        // // Click on the year and select the birth year
        // cy.get('.ant-picker-panel').contains(year).click();

        // // Confirm the selected birthdate is displayed correctly in the input field
        // cy.get('input#birthdateInput').should('have.value', birthdate.format('DD-MMM-YYYY'));
        // cy.wait(4000)
        // const date = new Date();
        // date.setMonth(date.getMonth() + 1);
        // // Set date to 23rd day of next month
        // const year = date.getFullYear();
        // const month = date.getMonth();
        // const day = 23;
        // // Open date picker
        // cy.get('#registrationForm_dob').eq(0).click()
        // cy.get('.ant-picker-content').eq(0)
        // .find('.ant-picker-cell-inner')
        // .each((el)=>{

        //   const date = el.text()
        //   cy.log(date);
        // })
    cy.get('#registrationForm_dob').click()
    cy.get('.ant-picker-year-btn').eq(0).click();
       
     cy.get('.ant-picker-header-super-prev-btn').click().click().click()    // get decade with 1999
    // now select the year
     cy.get('.ant-picker-content').contains('1999').click()
     cy.get('.ant-picker-content').contains('May').click()
     cy.get('.ant-picker-body').contains('23').click()
     cy.screenshot()



        // cy.get('.#registrationForm_dob').select('4').first().click();
        // // Select year
        // cy.get('#registrationForm_dob').select('2000');
        // // Select month
        // cy.get('#registrationForm_dob').select('Feb');
        // // Select day
        
        // // Assert input date value
        // cy.get('#registrationForm_dob').should(
        //   'have.value',
        //   `${`${month + 1}`.padStart(2, '0')}/${day}/${year}`
        // );
    }
} export default birthdate