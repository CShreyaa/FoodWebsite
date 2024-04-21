const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://shreya30c:b8QnVTbvsyhffL8p@foodweb.cttt9j5.mongodb.net/FoodWebsite'

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})

var db = mongoose.connection

db.on('connected', () => {
    console.log('Mongo DB Connection Successful');
})

db.on('error', () => {
    console.log('Mongo DB Connection Failed');
})

module.exports = mongoose