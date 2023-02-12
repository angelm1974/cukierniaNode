var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.locals.nazwa = 'Moja aplikacja';
 res.render('index', { title: "Sowa" });
});


module.exports = router;
