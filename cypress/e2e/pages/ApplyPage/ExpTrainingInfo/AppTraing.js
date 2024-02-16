import train from '../ExpTrainingInfo/TrainingLocator.json'

class trainInfomation{
    trainInfomation(){

        
        // cy.wait(10000)
        // cy.get(train.addItem, { timeout: 10000 }).should('exist').should('be.visible');
        // cy.wait(2000)
        // cy.xpath(train.training).type('TRAINING COURSE ON SOFTWARE QUALITY ASSURANCE AND TESTING – BANGLADESH', {force :true}).should('be.visible')
        // cy.wait(2000)
        // cy.get(train.organization).eq(0).click()
        // cy.wait(2000)
        // cy.get(train.drop_down).each(($el, index, $list) => {
        //     // $el is a wrapped jQuery element
        //     if ($el.text() === 'Academic Institute') {
        //       // wrap this element so we can
        //       // use cypress commands on it
        //       cy.wrap($el).click({ force: true })
        //     } else {
        //       // do something else
        //     }
        //   })
        // cy.wait(2000)
        // cy.get(train.institute).eq(0).click()
        // cy.wait(2000)
        // cy.get(train.drop_down).each(($el, index, $list) => {
        //     // $el is a wrapped jQuery element
        //     if ($el.text() === 'Bangladesh Army University of Engineering & Technology') {
        //       // wrap this element so we can
        //       // use cypress commands on it
        //       cy.wrap($el).click({ force: true })
        //     } else {
        //       // do something else
        //     }
        //   })
        // cy.wait(2000)
        // cy.get(train.course_type).eq(0).click()
        // cy.wait(2000)
        // cy.get(train.drop_down).each(($el, index, $list) => {
        //     // $el is a wrapped jQuery element
        //     if ($el.text() === 'Training') {
        //       // wrap this element so we can
        //       // use cypress commands on it
        //       cy.wrap($el).click({ force: true })
        //     } else {
        //       // do something else
        //     }
        //   })
        // cy.wait(2000)
        // cy.get(train.org_cate).eq(0).click()
        // cy.wait(2000)
        // cy.get(train.drop_down).each(($el, index, $list) => {
        //     // $el is a wrapped jQuery element
        //     if ($el.text() === 'Academic Institute') {
        //       // wrap this element so we can
        //       // use cypress commands on it
        //       cy.wrap($el).click({ force: true })
        //     } else {
        //       // do something else
        //     }
        //   })
        // cy.wait(2000)
        // cy.get(train.reference).type('TechnoVista Limited',{force:true}).should('be.visible')
        // cy.wait(2000)
        // cy.get(train.start_year).eq(0).type('2021',{force:true}).click()
        // cy.wait(2000)
        // cy.get(train.drop_down).each(($el, index, $list) => {
        //     // $el is a wrapped jQuery element
        //     if ($el.text() === '2020') {
        //       // wrap this element so we can
        //       // use cypress commands on it
        //       cy.wrap($el).click({ force: true })
        //     } else {
        //       // do something else
        //     }
        //   })
        // cy.get(train.end_year).eq(0).type('2022',{force:true}).click()
        // cy.wait(2000)
        // cy.wait(2000)
        // cy.get(train.drop_down).each(($el, index, $list) => {
        //   // $el is a wrapped jQuery element
        //   if ($el.text() === '2021') {
        //     // wrap this element so we can
        //     // use cypress commands on it
        //     cy.wrap($el).click({ force: true })
        //   } else {
        //     // do something else
        //   }
        // })
        // cy.wait(2000)
        // cy.screenshot()
        // cy.xpath(train.save_button).eq(0).click()
        cy.wait(2000)
        cy.get(train.impact).type('This work or research is being done in some other universities.',{force :true}).should('be.visible')
        cy.wait(2000)
        
    }
} export default trainInfomation