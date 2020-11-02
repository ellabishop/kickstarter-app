const express = require('express')
const router = express.Router()


// Add your routes here - above the module.exports line

router.post('/companies-house-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var compHouse = req.session.data['company']

  // Check whether the variable matches a condition
  if (compHouse == "No") {
    // Send user to next page
    res.redirect('option1/registered')
  }
  else {
    // Send user to ineligible page
    res.redirect('/error')
  }

})

module.exports = router
