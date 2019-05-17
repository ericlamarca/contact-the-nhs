// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

// Documentation router
router.get('/', function(req , res){ 
    res.render('index');
  });

// To Level 2
router.post('/views/simple-list-with-triage/answer', function (req, res) {
    var appointmentServiceType = req.session.data['appointment-service-type']
  
    if (appointmentServiceType === 'gp') {
      res.redirect('/early/simple-list-with-triage/gp')
    } 
    else if (appointmentServiceType == "dentist"){
      res.redirect('/early/simple-list-with-triage/dentist')
    }
    else if (appointmentServiceType == "hospital-or-clinic"){
      res.redirect('/early/simple-list-with-triage/hospital-or-clinic')
    }

})

module.exports = router;
