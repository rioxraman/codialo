const express  = require('express');
const app = express();
const port = 8000;


const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
//static
app.use(express.static('./assets')); 
//router 
app.use('/',require('./routes')); 

//extract
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
///ejs  app setting
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        console.log('Error',err);
        console.log(`Error in running server: ${port}`);
    }
    console.log(` running server @@: ${port}`);
});