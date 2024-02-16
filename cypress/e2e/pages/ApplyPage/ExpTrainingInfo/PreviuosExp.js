import train2 from '../ExpTrainingInfo/TrainingLocator.json'

class PrevtrainInfomation{
    PrevtrainInfomation(){

        cy.wait(2000)
        cy.xpath(train2.addItem).eq(0).click()
        cy.wait(2000)
        cy.xpath(train2.training).type('SOFTWARE QUALITY ASSURANCE AND TESTING – BANGLADESH', {force :true}).should('be.visible')
        cy.wait(2000)
        cy.get(train2.type_exp,{force :true}).eq(0).click()
        cy.wait(2000)
        cy.get(train2.drop_down).each(($el, index, $list) => {
          // $el is a wrapped jQuery element
          if ($el.text() === 'Job') {
            // wrap this element so we can
            // use cypress commands on it
            cy.wrap($el).click({ force: true })
          } else {
            // do something else
          }
        })
      cy.wait(2000)

      cy.get(train2.employee_type,{force :true}).eq(0).click( {force :true})
      cy.wait(2000)
      cy.get(train2.drop_down).each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        if ($el.text() === 'Full Time') {
          // wrap this element so we can
          // use cypress commands on it
          cy.wrap($el).click({ force: true })
        } else {
          // do something else
        }
      })
    cy.wait(2000)
        cy.get(train2.organization).eq(0).click()
        cy.wait(2000)
        cy.get(train2.drop_down).each(($el, index, $list) => {
            // $el is a wrapped jQuery element
            if ($el.text() === 'Academic Institute') {
              // wrap this element so we can
              // use cypress commands on it
              cy.wrap($el).click({ force: true })
            } else {
              // do something else
            }
          })
        cy.wait(2000)
        cy.get(train2.org_cate).eq(0).click()
        cy.wait(2000)
        cy.get(train2.drop_down).each(($el, index, $list) => {
          // $el is a wrapped jQuery element
          if ($el.text() === 'University') {
            // wrap this element so we can
            // use cypress commands on it
            cy.wrap($el).click({ force: true })
          } else {
            // do something else
          }
        })
      cy.wait(2000)
        cy.get(train2.institute).eq(0).click()
        cy.wait(2000)
        cy.get(train2.drop_down).each(($el, index, $list) => {
            // $el is a wrapped jQuery element
            if ($el.text() === 'Bangladesh Army University of Engineering & Technology') {
              // wrap this element so we can
              // use cypress commands on it
              cy.wrap($el).click({ force: true })
            } else {
              // do something else
            }
          })
      
        cy.wait(2000)
        cy.get(train2.description).type('TechnoVista Limited',{force:true}).should('be.visible')
        cy.wait(2000)
        
        cy.get(train2.location).eq(0).type('raj',{force:true}).click()
        
        cy.wait(2000)
        cy.get(train2.drop_down).each(($el, index, $list) => {
          // $el is a wrapped jQuery element
          if ($el.text() === 'Rajshahi') {
            // wrap this element so we can
            // use cypress commands on it
            cy.wrap($el).click({ force: true })
          } else {
            // do something else
          }
        })
        cy.wait(2000)
        cy.screenshot()
        cy.xpath(train2.save_button).eq(0).click()
    }
} export default PrevtrainInfomation