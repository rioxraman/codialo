const express  = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
//passport  
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
// const MongoStore = require('connect-mongo')(session);
const MongoStore = require('connect-mongo');
//cookies
app.use(express.urlencoded());
app.use(cookieParser());



app.use(expressLayouts);
//static
app.use(express.static('./assets')); 


//extract
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
///ejs  app setting
app.set('view engine', 'ejs');
app.set('views', './views');
//passport engine
app.use(session({
    name:'codialo',
    secret : 'rioxrio',
    saveUninitialized: false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100),
    }, 
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/test-app' })
    
    // //mongostore
    //     store : new MongoStore(
    //         {
    //             mongooseConnection:db,
    //             autoRemove:'disabled'
    //         },
    //         function(err){
    //             console.log(err || 'connect mongo db okay');
    //         }
    //     )    //version issue
        
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
//router 
app.use('/',require('./routes')); 

app.listen(port, function(err){
    if(err){
        console.log('Error',err);
        console.log(`Error in running server: ${port}`);
    }
    console.log(` running server at port: ${port}`);
});
