var mongoose = require('mongoose');

MONGODB_URL='mongodb+srv://podyplomowka:Goscie!001@cluster0.ajwo5.mongodb.net/bydgoszcz'

db=mongoose
db.connect(MONGODB_URL)

module.exports=db;