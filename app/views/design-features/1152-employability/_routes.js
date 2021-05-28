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
  res.redirect('design-features/1152-employability/organisation-details')
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

