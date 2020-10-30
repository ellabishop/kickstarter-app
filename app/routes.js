const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/type-of-org-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var typeOrg = req.session.data['type-of-org']

  // Check whether the variable matches a condition
  if (typeOrg == "a company") {
    // Send user to next page
    res.redirect('/company')
  }
  if (typeOrg == "a sole trader") {
    // Send user to next page
    res.redirect('/sole-trader')
  }
  if (typeOrg == "a partnership") {
    // Send user to next page
    res.redirect('/partnership')
  }
  if (typeOrg == "a charity, public body or not for profit organisation") {
    // Send user to next page
    res.redirect('/charity')
  }
  else {
    // Send user to ineligible page
    res.redirect('/ineligible')
  }

})

module.exports = router
