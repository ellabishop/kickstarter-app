const express = require('express')
const router = express.Router()


// Add your routes here - above the module.exports line


// <------------------------------------------------------->

// KICK-1152 improve employability questions

// are you an employer
router.post('/are-you-an-employer', function (req, res) {
  var kstype = req.session.data['kstype']
  if (kstype === 'true') {
    res.redirect('design-features/1152-employability/application-process-has-changed')
  } else {
    res.redirect('design-features/1152-employability/do-you-have-a-kickstart-grant-agreement')
  }
});

// after employer we do KS grant
router.post('/kickstart-grant', function (req, res) {
  var ksGrant = req.session.data['ksGrant']
  if (ksGrant === 'true') {
    res.redirect('design-features/1152-employability/the-kickstart-scheme-application-process-has-changed')
  } else {
    res.redirect('design-features/1152-employability/kickstart-criteria')
  }
});

//after KS grant we do criteria

router.post('/criteria', function (req, res) {

  var metcrit = req.session.data['metcrit']

if (metcrit === 'true') {
  res.redirect('design-features/1152-employability/kickstart-additional')
} else {
  res.redirect('design-features/1152-employability/not-eligible-kickstart-criteria')
}
})

//after criteria we do additional

router.post('/additional', function (req, res) {

  var metadd = req.session.data['metadd']

if (metadd === 'true') {
  res.redirect('design-features/1152-employability/employability-support')
} else {
  res.redirect('design-features/1152-employability/not-eligible-vacancy-just-for-kickstart')
}
})

//after additional we do support

router.post('/support', function (req, res) {

  var metsup = req.session.data['metsup']

if (metsup === 'true') {
  res.redirect('design-features/1152-employability/kickstart-additional-info')
} else {
  res.redirect('design-features/1152-employability/not-eligible-support-for-young-people')
}
})

//after support we do details

router.post('/company-details', function (req, res) {

  var metsup = req.session.data['metsup']

if (metsup === 'true') {
  res.redirect('design-features/1152-employability/description-of-organisation')
} else {
  res.redirect('design-features/1152-employability/description-of-organisation')
}
})

// <------------------------------------------------------->

// version 3

router.post('/howmanyvacs', function (req, res) {

  var over30 = req.session.data['over-30']

if (over30 === 'true') {
  res.redirect('option2/kickstart-criteria')
} else {
  res.redirect('option2/need-30-placements')
}
})

// are you an employer

router.post('/are-you-an-employ', function (req, res) {
  var kstype = req.session.data['kstype']
  if (kstype === 'true') {
    res.redirect('version-3/application-process-has-changed')
  } else {
    res.redirect('version-3/do-you-have-a-kickstart-grant-agreement')
  }
});

// after employer we do KS grant

router.post('/kickstart-grant-agreement', function (req, res) {
  var ksGrant = req.session.data['ksGrant']
  if (ksGrant === 'true') {
    res.redirect('version-3/the-kickstart-scheme-application-process-has-changed')
  } else {
    res.redirect('version-3/kickstart-criteria')
  }
});

//after KS grant we do criteria

router.post('/kickstart-criteria', function (req, res) {

  var metcrit = req.session.data['metcrit']

if (metcrit === 'true') {
  res.redirect('version-3/kickstart-additional')
} else {
  res.redirect('version-3/not-eligible-kickstart-criteria')
}
})

//after criteria we do additional

router.post('/kickstart-additional', function (req, res) {

  var metadd = req.session.data['metadd']

if (metadd === 'true') {
  res.redirect('version-3/employability-support')
} else {
  res.redirect('version-3/not-eligible-vacancy-just-for-kickstart')
}
})

//after additional we do support

router.post('/employability-support', function (req, res) {

  var metsup = req.session.data['metsup']

if (metsup === 'true') {
  res.redirect('version-3/organisation-details')
} else {
  res.redirect('version-3/not-eligible-support-for-young-people')
}
})

//after support we do details

router.post('/company-details-3', function (req, res) {

  var metsup = req.session.data['metsup']

if (metsup === 'true') {
  res.redirect('version-3/how-many-employees')
} else {
  res.redirect('version-3/how-many-employees')
}
})


router.post('/companies-details', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var compHouse = req.session.data['company']

  // Check whether the variable matches a condition
  if (compHouse == "false") {
    // Send user to next page
    res.redirect('option2/registered')
  }
  else {
    // Send user to ineligible page
    res.redirect('option2/represented-companies-details')
  }

})

module.exports = router

// option 2
router.post('/howmanyvacs', function (req, res) {

  var over30 = req.session.data['over-30']

if (over30 === 'true') {
  res.redirect('option2/kickstart-criteria')
} else {
  res.redirect('option2/need-30-placements')
}
})



router.post('/criteria', function (req, res) {

  var metcrit = req.session.data['metcrit']

if (metcrit === 'true') {
  res.redirect('option2/kickstart-additional')
} else {
  res.redirect('option2/not-eligible-kickstart-criteria')
}
})


router.post('/additional', function (req, res) {

  var metadd = req.session.data['metadd']

if (metadd === 'true') {
  res.redirect('option2/employability-support')
} else {
  res.redirect('option2/not-eligible-vacancy-just-for-kickstart')
}
})


router.post('/support', function (req, res) {

  var metsup = req.session.data['metsup']

if (metsup === 'true') {
  res.redirect('option2/organisation-details')
} else {
  res.redirect('option2/not-eligible-support-for-young-people')
}
})







router.post('/companies-house-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var compHouse = req.session.data['company']

  // Check whether the variable matches a condition
  if (compHouse == "false") {
    // Send user to next page
    res.redirect('option2/registered')
  }
  else {
    // Send user to ineligible page
    res.redirect('option2/represented-companies-details')
  }

})

module.exports = router
