// const { default: mongoose } = require('mongoose');
var db = require('./mongoConnection');

const ciastoSchema= new db.Schema({
    nazwa: String,
    opis: String,
    typ: String,
    skladniki: {maka: Number,
                cukier: Number,
                jajka: Number,
                olej: Number,}
  }, {collection: 'ciasta'});

const Ciasto = db.model('Ciasto', ciastoSchema);

module.exports=Ciasto;