var express = require('express');
var Ciasto = require('../models/ciasto');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    Ciasto.find({},(err, ciasta) => {
        if(!err) {
            res.render('ciasta', { title: "ciasta", ciasta_1: ciasta });
        }
        else {
            console.log(err);
        }
    });
});


router.get('/owocowe', function(req, res, next) {
    res.render('ciasta-owocowe', { title: "ciasta - owocowe" });
   });



function zapamietajCiasto() {
    const makowiec=new Ciasto({
    nazwa: 'Makowiec',
    opis: 'Makowiec to ciasto z makiem, cukrem, jajkami, masłem i miodem. Wyróżnia się dwoma rodzajami: zwykłym i z dodatkiem kandyzowanej skórki pomarańczowej. Wyrabia się go w formie okrągłej lub prostokątnej, z wierzchu posypanej cukrem pudrem lub cukrem waniliowym. Makowiec jest jednym z najpopularniejszych ciast w Polsce.',
    typ: 'Ciasto',
    skladniki: {maka: 200,
                cukier: 200,
                jajka: 4,
                olej: 100,}
  });
  makowiec.save()
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });
}
  
module.exports = router;
