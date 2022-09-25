const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/codialo_development');
const db = mongoose.connection;

db.on('error', console.error.bind(console,"Error Connectiong"));

db.once('open', function(){
    console.log('connenct to database :: MondoDB');
});

module.exports = db;