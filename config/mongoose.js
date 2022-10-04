const mongoose = require('mongoose');
const env = require('./environment');
mongoose.connect(`mongodb://localhost/${env.db}`);
const db = mongoose.connection;

db.on('error', console.error.bind(console,"Error Connectiong"));

db.once('open', function(){
    console.log('connenct to database :: MondoDB');
});

module.exports = db;