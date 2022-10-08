const express  = require('express');
const env = require('./config/environment');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const app = express();
require('./config/view-helpers')(app);
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
//passport  
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const passportJWT = require('./config/passport-jwt-strategy');
const passportGoogle = require('./config/passport-google-oauth2-strategy');
// const MongoStore = require('connect-mongo')(session);
const MongoStore = require('connect-mongo');
const flash =require('connect-flash');
//sass middleware
const sassMiddleware =require('node-sass-middleware');
const customWare = require('./config/middleware');

//cors

const cors = require('cors');


// setup the chat server to be used with socket.io
const chatServer = require('http').Server(app);
const chatSockets = require('./config/chat_sockets').chatSockets(chatServer);
chatServer.listen(5000);
console.log('chat server is listening on port 5000');
const path = require('path');
app.use(cors());
    

if(env.name =='development'){
    app.use(sassMiddleware({
        src:'./assets/scss',
        dest:'./assets/css',
        debug:true,
        outputStyle:'extended',
        prefix:'/css'
    }));
}
//cookies
app.use(express.urlencoded());
app.use(cookieParser());



app.use(expressLayouts);
//static
app.use(express.static(env.asset_path)); 
//multer
app.use('/uploads',express.static(__dirname + '/uploads'));
//morgan stram
app.use(logger(env.morgan.mode, env.morgan.options));


//extract
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
///ejs  app setting
app.set('view engine', 'ejs');
app.set('views', './views');
//passport engine
app.use(session({
    name:'codialo',
    secret : env.session_cookie_key,
    saveUninitialized: false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100),
    }, 
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/codialo_development' })
    
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
app.use(flash());
app.use(customWare.setFlash);
//router 
app.use('/', require('./routes')); 

app.listen(port, function(err){
    if(err){
        console.log('Error',err);
        console.log(`Error in running server: ${port}`);
    }
    console.log(` running server at port: ${port}`);
});
