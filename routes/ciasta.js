var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 res.render('ciasta', { title: "ciasta" });
});

router.get('/owocowe', function(req, res, next) {
    res.render('ciasta-owocowe', { title: "ciasta - owocowe" });
   });

module.exports = router;
