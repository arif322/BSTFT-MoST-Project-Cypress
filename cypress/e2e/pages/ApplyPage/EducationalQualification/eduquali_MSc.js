import education from './EduQualificationLocatorsandData.json'


class addeducation_MSc{
    addeducation_MSc(){
       cy.xpath(education.addItem).eq(0).click()
       cy.wait(2000)
       cy.get(education.examination).eq(0).click()
       cy.wait(2000)
       cy.get(education.drop_down).each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        if ($el.text() === 'MSc') {
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
        if ($el.text() === 'Chemistry') {
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
        if ($el.text() === 'Bangabandhu Sheikh Mujib Medical University') {
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
        if ($el.text() === 'University') {
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
        if ($el.text() === 'Dhaka Medical College & Hospital') {
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
        if ($el.text() === 'Out of 4') {
          // wrap this element so we can
          // use cypress commands on it
          cy.wrap($el).click({ force: true })
        } else {
          // do something else
        }
      })
       cy.wait(2000)
       cy.get(education.passing_year).eq(0).type('2014',{force:true}).click()
       cy.wait(2000)
       cy.get(education.drop_down).each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        if ($el.text() === '2014') {
          // wrap this element so we can
          // use cypress commands on it
          cy.wrap($el).click({ force: true })
        } else {
          // do something else
        }
      })
       cy.wait(2000)
       cy.get(education.GPA).eq(0).type('3.33').should('be.visible')
       cy.wait(2000)
       cy.get(education.result).eq(0).click()
       cy.wait(2000)
       cy.get(education.result).eq(0).type('B',{force:true}).click()
       cy.wait(2000)
       cy.get(education.drop_down).each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        if ($el.text() === 'B') {
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
} export default addeducation_MSc