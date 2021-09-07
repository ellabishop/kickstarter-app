const express = require('express')
const router = express.Router()


// Add your routes here - above the module.exports line


// <-----------------------KICK-1657----------------------->

//////////////// KICK-1657-stop-GOEs-using-KS-ID – ROUTE-1 ////////////////

// are you an employer
router.post('/1657-are-you-an-employer', function (req, res) {
  var kstype = req.session.data['kstype']
  if (kstype === 'true') {
    res.redirect('design-features/1197_grant-variations/gateway/do-you-have-a-kickstart-grant-agreement')
  } else {
    res.redirect('design-features/1657-stop-goes-using-ks-id/route-1/employer/do-you-have-a-kickstart-grant-agreement-employer')
  }
});

// Next we do KS grant - employer
router.post('/1657-have-a-kickstart-grant-employer', function (req, res) {
  var KickstartGrant = req.session.data['KickstartGrant']
  if (KickstartGrant === 'true') {
    res.redirect('design-features/1657-stop-goes-using-ks-id/route-1/employer/kickstart-criteria')
  } else {
    res.redirect('design-features/1152-employability/kickstart-criteria')
  }
});

//after KS grant we do criteria

router.post('/1657-variations-criteria', function (req, res) {

  var metcrit = req.session.data['metcrit']

if (metcrit === 'true') {
  res.redirect('design-features/1657-stop-goes-using-ks-id/route-1/employer/kickstart-additional')
} else {
  res.redirect('design-features/1152-employability/not-eligible-kickstart-criteria')
}
});

//after criteria we do additional

router.post('/1657-variations-additional', function (req, res) {

  var metadd = req.session.data['metadd']

if (metadd === 'true') {
  res.redirect('design-features/1657-stop-goes-using-ks-id/route-1/employer/employability-support')
} else {
  res.redirect('design-features/1152-employability/not-eligible-vacancy-just-for-kickstart')
}
});

router.post('/1657-variations-employability-support', function (req, res) {
  var ksSupport = req.session.data['ksSupport']
if (ksSupport === 'true') {
    res.redirect('design-features/1657-stop-goes-using-ks-id/route-1/employer/what-is-your-kickstart-number')
  } else {
    res.redirect('design-features/1152-employability/not-eligible-support-for-young-people')
  }
})


//////////////// KICK-1657-stop-GOEs-using-KS-ID – ROUTE-2 ////////////////

// are you an employer
router.post('/1657-2-are-you-an-employer', function (req, res) {
  var kstype = req.session.data['kstype']
  if (kstype === 'true') {
    res.redirect('design-features/1197_grant-variations/gateway/do-you-have-a-kickstart-grant-agreement')
  } else {
    res.redirect('design-features/1657-stop-goes-using-ks-id/route-2/employer/do-you-have-a-kickstart-grant-agreement-employer')
  }
});

// Next we do KS grant - employer
router.post('/1657-2-have-a-kickstart-grant-employer', function (req, res) {
  var KickstartGrant = req.session.data['KickstartGrant']
  if (KickstartGrant === 'true') {
    res.redirect('design-features/1657-stop-goes-using-ks-id/route-2/employer/kickstart-criteria')
  } else {
    res.redirect('design-features/1152-employability/kickstart-criteria')
  }
});

//after KS grant we do criteria

router.post('/1657-2-variations-criteria', function (req, res) {

  var metcrit = req.session.data['metcrit']

if (metcrit === 'true') {
  res.redirect('design-features/1657-stop-goes-using-ks-id/route-2/employer/kickstart-additional')
} else {
  res.redirect('design-features/1152-employability/not-eligible-kickstart-criteria')
}
});

//after criteria we do additional

router.post('/1657-2-variations-additional', function (req, res) {

  var metadd = req.session.data['metadd']

if (metadd === 'true') {
  res.redirect('design-features/1657-stop-goes-using-ks-id/route-2/employer/employability-support')
} else {
  res.redirect('design-features/1152-employability/not-eligible-vacancy-just-for-kickstart')
}
});

router.post('/1657-2-variations-employability-support', function (req, res) {
  var ksSupport = req.session.data['ksSupport']
if (ksSupport === 'true') {
    res.redirect('design-features/1657-stop-goes-using-ks-id/route-2/employer/what-is-your-kickstart-number')
  } else {
    res.redirect('design-features/1152-employability/not-eligible-support-for-young-people')
  }
})

///////////////////////////////////////////////////

// Grant variations – Employers and Gateways

// are you an employer
router.post('/are-you-an-employer', function (req, res) {
  var kstype = req.session.data['kstype']
  if (kstype === 'true') {
    res.redirect('design-features/1197_grant-variations/gateway/do-you-have-a-kickstart-grant-agreement')
  } else {
    res.redirect('design-features/1197_grant-variations/employer/do-you-have-a-kickstart-grant-agreement-employer')
  }
});

// after employer we do KS grant – gateway
router.post('/have-a-kickstart-grant', function (req, res) {
  var KickstartGrant = req.session.data['KickstartGrant']
  if (KickstartGrant === 'true') {
    res.redirect('design-features/1197_grant-variations/gateway/what-is-your-kickstart-number')
  } else {
    res.redirect('design-features/1197_grant-variations/gateway/application-process-has-changed')
  }
});

// after employer we do KS grant - employer
router.post('/have-a-kickstart-grant-employer', function (req, res) {
  var KickstartGrant = req.session.data['KickstartGrant']
  if (KickstartGrant === 'true') {
    res.redirect('design-features/1197_grant-variations/employer/kickstart-criteria')
  } else {
    res.redirect('design-features/1152-employability/kickstart-criteria')
  }
});

//after KS grant we do criteria

router.post('/variations-criteria', function (req, res) {

  var metcrit = req.session.data['metcrit']

if (metcrit === 'true') {
  res.redirect('design-features/1197_grant-variations/employer/kickstart-additional')
} else {
  res.redirect('design-features/1152-employability/not-eligible-kickstart-criteria')
}
});

//after criteria we do additional

router.post('/variations-additional', function (req, res) {

  var metadd = req.session.data['metadd']

if (metadd === 'true') {
  res.redirect('design-features/1197_grant-variations/employer/employability-support')
} else {
  res.redirect('design-features/1152-employability/not-eligible-vacancy-just-for-kickstart')
}
})


// <------------------------------------------------------->


////////// companies house api ///////////


// are you an employer ch api route
router.post('/are-you-an-employer-api', function (req, res) {
  var kstype = req.session.data['kstype']
  if (kstype === 'true') {
    res.redirect('design-features/1197_grant-variations/gateway-api/do-you-have-a-kickstart-grant-agreement')
  } else {
    res.redirect('design-features/1197_grant-variations/employer/do-you-have-a-kickstart-grant-agreement-employer')
  }
});

// after employer we do KS grant – gateway
router.post('/have-a-kickstart-grant-api', function (req, res) {
  var KickstartGrant = req.session.data['KickstartGrant']
  if (KickstartGrant === 'true') {
    res.redirect('design-features/1197_grant-variations/gateway-api/what-is-your-kickstart-number')
  } else {
    res.redirect('design-features/1197_grant-variations/gateway/application-process-has-changed')
  }
});

  // Load helper functions
  // ADD extra routing here if needed.
  var RestClient = require('node-rest-client').Client;


  var client = new RestClient();

  // CHANGE VERSION each time you create a new version
  const base_url = "features/"


  router.post('/design-features/1197_grant-variations/gateway-api/crn-lookup/company-number', function(req, res) {
    var args = {
      headers: {
        "Authorization": "zlgqkDNX156irCJYp_cdjGs5O_nHQUUhmS5w4LYF"
      }
    };
    let q = req.body.crn;
    client.get("https://api.company-information.service.gov.uk/company/" + q, args, function(data, response) {

      // parse body as an object "company". This can be used in nunjucks like {{company.company_name}}
      console.log(data)

      //req.session.data.company is the current search result
      req.session.data.company = data
      if (data.company_name) {
        res.redirect(301, '/design-features/1197_grant-variations/gateway-api/crn-lookup/crn-result');
      } else {
        res.redirect(301, '/design-features/1197_grant-variations/gateway-api/crn-lookup/not-found');
      }

    })

  })

// has a companies house registration number

  router.post('/has-company-number', function (req, res) {
    var ksSupport = req.session.data['has-registration-number']
  if (ksSupport === 'true') {
      res.redirect('design-features/1197_grant-variations/gateway-api/who-registered-with')
    } else {
      res.redirect('design-features/1197_grant-variations/gateway-api/crn-lookup/company-number')
    }
  });

router.post('/who-registered-with', function (req, res) {
  if(!req.session.data.company) {
    req.session.data.company = {}
  }
  req.session.data.company.company_number = req.session.data['reg-number'] ||
    req.session.data['contact-by-scot-number'] ||
    req.session.data['contact-public-sector'] ||
    req.session.data['contact-other']

  res.redirect('design-features/1197_grant-variations/gateway-api/employer-details')
});

router.post('/employer-details', function (req, res) {
  console.log(req.session.data)
  if(!req.session.data.company) {
    req.session.data.company = {}
  }
  req.session.data.company.company_name = req.session.data['company_name'];
  req.session.data.company.registered_office_address = {};
  req.session.data.company.registered_office_address.address_line_1 = req.session.data['address-line-1'];
  req.session.data.company.registered_office_address.address_line_2 = req.session.data['address-line-2'];
  req.session.data.company.registered_office_address.locality = req.session.data['address-town'];
  req.session.data.company.registered_office_address.postal_code = req.session.data['address-postcode'];
  if(!req.session.data.companies) {
    req.session.data.companies = []
  }
  req.session.data.companies.push(req.session.data.company);

  console.log(req.session.data.company.company_number)
  res.redirect('design-features/1197_grant-variations/gateway-api/how-many-jobs')
});

  // no – who registered with

  // router.post('/employer-details', function (req, res) {
  //   var ksSupport = req.session.data['reg-number']
  //   console.log('employer-details')
  // if (ksSupport === 'true') {
  //     res.redirect('design-features/1197_grant-variations/gateway-api/employer-details')
  //   } else {
  //     res.redirect('design-features/1197_grant-variations/gateway-api/employer-details')
  //   }
  // });


  // confirm employer details

  router.post('/crn-result', function (req, res) {
    var ksSupport = req.session.data['is_signed']
  if (ksSupport === 'true') {
      res.redirect('design-features/1197_grant-variations/gateway-api/crn-lookup/has-company-number')
    } else {
    if(!req.session.data.companies) {
      req.session.data.companies = []
    }
    req.session.data.companies.push(req.session.data.company)
    res.redirect('design-features/1197_grant-variations/gateway-api/how-many-jobs')
    }
  });


// next we choose to add another in the ch api
router.post('/add-another-api', function (req, res) {
  var ksSupport = req.session.data['ksAddAnother']
  if (ksSupport === 'true') {
    res.redirect('design-features/1197_grant-variations/gateway-api/check-your-employers')
  } else {
    res.redirect('design-features/1197_grant-variations/gateway-api/crn-lookup/has-company-number')
  }
});

// next we do employability support

router.post('/variations-employability-support', function (req, res) {
  var ksSupport = req.session.data['ksSupport']
if (ksSupport === 'true') {
    res.redirect('design-features/1197_grant-variations/employer/what-is-your-kickstart-number')
  } else {
    res.redirect('design-features/1152-employability/not-eligible-support-for-young-people')
  }
});


// submitting variations options
router.post('/select-how-to-submit-variations', function (req, res) {
  var ksSupport = req.session.data['ksVariations']
  if (ksSupport === 'true') {
    res.redirect('design-features/1197_grant-variations/gateway/upload-instructions')
  } else {
    res.redirect('design-features/1197_grant-variations/gateway/employer-details')
  }
});

// next we choose to add another
router.post('/add-another', function (req, res) {
  var ksSupport = req.session.data['ksAddAnother']
  if (ksSupport === 'true') {
    res.redirect('design-features/1197_grant-variations/gateway/check-your-employers')
  } else {
    res.redirect('design-features/1197_grant-variations/gateway/employer-details-next')
  }
});

// uploading file – check your file
router.post('/check-file-uploaded', function (req, res) {
  var ksSupport = req.session.data['ksVariations']
  if (ksSupport === 'true') {
    res.redirect('design-features/1197_grant-variations/gateway/upload-file')
  } else {
    res.redirect('design-features/1197_grant-variations/gateway/tell-us-why-you-need-the-additional-jobs')
  }
});

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
