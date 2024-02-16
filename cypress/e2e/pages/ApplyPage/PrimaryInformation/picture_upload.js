import data4 from './ApplyInformationLocatorsandData.json'
class pictureUpload{
    pictureUpload(){
        
        // cy.wait(2000)
        // cy.xpath(data4.picture_upload).attachFile('arif.jpg')
        // cy.wait(2000)
        // cy.get('button',{ multiple: true }).should('be.visible')
        
        const fileName = 'arif.jpg';
        cy.fixture(fileName).then(fileContent => {
            cy.get('input[type="file"]').attachFile({
                fileContent,
                fileName,
                mimeType: 'image/jpeg'
            });
        });

        // Assuming you have an image tag where the uploaded image will be displayed
        cy.xpath(data4.picture_upload).eq(0).should('be.visible');
        cy.get('img').should('be.visible').invoke('on', 'load')
        cy.wait(5000)
        
       

    }   

    
} export default pictureUpload