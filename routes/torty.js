var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 res.render('torty', { title: "Torty" });
});

router.get('/marchewkowe', function(req, res, next) {
    res.render('torty-marchewkowe', { title: "Torty - Marchewkowe" });
   });

module.exports = router;
