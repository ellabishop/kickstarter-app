const express = require('express')
const router = express.Router()


////////////// CH API revised //////////////

// are you an employer ch api revised route
router.post('/are-you-an-employer-api-revised', function (req, res) {
    var kstype = req.session.data['kstype']
    if (kstype === 'true') {
      res.redirect('design-features/1197_grant-variations/gateway-api-revised/do-you-have-a-kickstart-grant-agreement')
    } else {
      res.redirect('design-features/1197_grant-variations/employer/do-you-have-a-kickstart-grant-agreement-employer')
    }
  });
  
  // after employer we do KS grant – gateway
  router.post('/have-a-kickstart-grant-api-revised', function (req, res) {
    var KickstartGrant = req.session.data['KickstartGrant']
    if (KickstartGrant === 'true') {
      res.redirect('design-features/1197_grant-variations/gateway-api-revised/what-is-your-kickstart-number')
    } else {
      res.redirect('design-features/1197_grant-variations/gateway/application-process-has-changed')
    }
  });
  
  // has a companies house registration number
  
  router.post('/has-company-number-revised', function (req, res) {
    var ksSupport = req.session.data['has-registration-number']
  if (ksSupport === 'true') {
      res.redirect('design-features/1197_grant-variations/gateway-api-revised/employer-details')
    } else {
      res.redirect('design-features/1197_grant-variations/gateway-api-revised/crn-lookup/company-number')
    }
  });

  // Load helper functions
  // ADD extra routing here if needed.
  var RestClient = require('node-rest-client').Client;


  var client = new RestClient();

  // CHANGE VERSION each time you create a new version
  const base_url = "features/"


  router.post('/design-features/1197_grant-variations/gateway-api-revised/crn-lookup/company-number', function(req, res) {
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
        res.redirect(301, '/design-features/1197_grant-variations/gateway-api-revised/crn-lookup/crn-result');
      } else {
        res.redirect(301, '/design-features/1197_grant-variations/gateway-api-revised/crn-lookup/not-found');
      }

    })

  })

  router.post('/employer-details-revised', function (req, res) {
    console.log(req.session.data)
    if(!req.session.data.company) {
      req.session.data.company = {}
    }
    req.session.data.company.company_name = req.session.data['company_name'];
    req.session.data.company.contact_type = req.session.data['contact_type'];
    req.session.data.company.company_number = req.session.data['company_number'];
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
    res.redirect('design-features/1197_grant-variations/gateway-api-revised/how-many-jobs')
  });

  // confirm employer details

  router.post('/crn-result-revised', function (req, res) {
    var ksSupport = req.session.data['is_signed']
  if (ksSupport === 'true') {
      res.redirect('design-features/1197_grant-variations/gateway-api-revised/crn-lookup/has-company-number')
    } else if (ksSupport === 'manual') {
        res.redirect('design-features/1197_grant-variations/gateway-api-revised/employer-details')
      }
    else {
    if(!req.session.data.companies) {
      req.session.data.companies = []
    }
    req.session.data.companies.push(req.session.data.company)
    res.redirect('design-features/1197_grant-variations/gateway-api-revised/how-many-jobs')
    }
  });

  // next we choose to add another in the ch api
router.post('/add-another-api-revised', function (req, res) {
    var ksSupport = req.session.data['ksAddAnother']
    if (ksSupport === 'true') {
      res.redirect('design-features/1197_grant-variations/gateway-api-revised/check-your-employers')
    } else {
      res.redirect('design-features/1197_grant-variations/gateway-api-revised/crn-lookup/has-company-number')
    }
  });

  module.exports = router
