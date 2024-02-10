import education from '../EducationalQualification/EduQualificationLocatorsandData.json'

class addeducation_SSC{
    addeducation_SSC(){
       cy.xpath(education.addItem).eq(0).click()
       cy.wait(2000)
       cy.get(education.examination).eq(0).click()
       cy.wait(2000)
       cy.get(education.drop_down).each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        if ($el.text() === 'SSC') {
          
          cy.wrap($el).click({ force: true })
        } else {
          // do something else
        }
      })
       cy.wait(2000)
       cy.get(education.group_department).eq(0).click()
       cy.wait(2000)
       cy.get(education.drop_down).each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        if ($el.text() === 'Science') {
          
          cy.wrap($el).click()
        } else {
          // do something else
        }
      })
       cy.wait(2000)
       cy.get(education.board_university).eq(0).click()
       cy.wait(2000)
       cy.get(education.drop_down).each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        if ($el.text() === 'Rajshahi Board') {
          
          cy.wrap($el).click({ force: true })
        } else {
          // do something else
        }
      })
       cy.wait(2000)
       cy.get(education.institute_category).eq(0).click()
       cy.wait(2000)
       cy.get(education.drop_down).each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        if ($el.text() === 'School') {
          
          cy.wrap($el).click({ force: true })
        } else {
          // do something else
        }
      })
       cy.wait(2000)
       cy.get(education.Institute_name).eq(0).click()
       cy.wait(2000)
       cy.get(education.drop_down).each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        if ($el.text() === 'Mirpur Govt. High School') {
          
          cy.wrap($el).click({ force: true })
        } else {
          // do something else
        }
      })
       cy.wait(2000)
       cy.get(education.result_type).eq(0).click()
       cy.wait(2000)
       cy.get(education.drop_down).each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        if ($el.text() === 'Out of 5') {
          
          cy.wrap($el).click({ force: true })
        } else {
          // do something else
        }
      })
       cy.wait(2000)
       cy.get(education.passing_year).eq(0).type('2007',{force:true}).click()
       cy.wait(2000)
       cy.get(education.drop_down).each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        if ($el.text() === '2007') {
          
          cy.wrap($el).click({ force: true })
        } else {
          // do something else
        }
      })
       cy.wait(2000)
       cy.get(education.GPA).eq(0).type('4.23').should('be.visible')
       cy.wait(2000)
       cy.get(education.result).eq(0).click()
       cy.wait(2000)
       cy.get(education.result).eq(0).type('B',{force:true}).click()
       cy.wait(2000)
       cy.get(education.drop_down).each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        if ($el.text() === 'B') {
          
          cy.wrap($el).click({ force: true })
        } else {
          // do something else
        }
      })
       cy.wait(2000)
       cy.screenshot()
       cy.xpath(education.save_button).eq(0).click()
       cy.wait(2000)


    }
} export default addeducation_SSC