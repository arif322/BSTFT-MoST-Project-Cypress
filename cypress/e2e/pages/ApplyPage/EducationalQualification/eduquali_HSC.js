import education from './EduQualificationLocatorsandData.json'

class addeducation_HSC{
    addeducation_HSC(){
       cy.xpath(education.addItem).eq(0).click()
       cy.wait(2000)
       cy.get(education.examination).eq(0).click()
       cy.wait(2000)
       cy.get(education.drop_down).each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        if ($el.text() === 'HSC') {
          // wrap this element so we can
          // use cypress commands on it
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
          // wrap this element so we can
          // use cypress commands on it
          cy.wrap($el).click({ force: true })
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
          // wrap this element so we can
          // use cypress commands on it
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
          // wrap this element so we can
          // use cypress commands on it
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
          // wrap this element so we can
          // use cypress commands on it
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
          // wrap this element so we can
          // use cypress commands on it
          cy.wrap($el).click({ force: true })
        } else {
          // do something else
        }
      })
       cy.wait(2000)
       cy.get(education.passing_year).eq(0).type('2009',{force:true}).click()
       cy.wait(2000)
       cy.get(education.drop_down).each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        if ($el.text() === '2009') {
          // wrap this element so we can
          // use cypress commands on it
          cy.wrap($el).click({ force: true })
        } else {
          // do something else
        }
      })
       cy.wait(2000)
       cy.get(education.GPA).eq(0).type('4.88').should('be.visible')
       cy.wait(2000)
       cy.get(education.result).eq(0).click()
       cy.wait(2000)
       cy.get(education.result).eq(0).type('A',{force:true}).click()
       cy.wait(2000)
       cy.get(education.drop_down).each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        if ($el.text() === 'A') {
          // wrap this element so we can
          // use cypress commands on it
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
} export default addeducation_HSC