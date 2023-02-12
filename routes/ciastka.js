var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 res.render('ciastka', { title: "ciastka" });
});

router.get('/mufiny', function(req, res, next) {
    res.render('mufiny', { title: "Mufiny" });
   });

module.exports = router;
