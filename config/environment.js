const fs = require('fs');
const rfs = require('rotating-file-stream');
const path = require('path');

const logDirectory = path.join(__dirname,'../production_logs');

fs.existsSync(logDirectory)||fs.mkdirSync(logDirectory);

const accessLogStream = rfs.createStream('access.log',{
     interval:'1d',
     path:logDirectory
});

const development = {
    name: 'development',
    asset_path: '/assets',
    session_cookie_key: 'codialo',
    db: 'codialo_development',
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'saibys@saibys.com',
            pass: 'xxxxxx'
        }
    },

    
    jwt_secret: 'codialo',
    google_clientID: "200918686716-xxxxxxxxxxx.apps.googleusercontent.com",
    google_clientSecret: "GOCSPX-xxxxxxxxxxxxxxx",
    google_callbackURL: "http://localhost:8000/users/auth/google/callback",
}

   // "Un}VWl)~nazs3{w" sessioncookies 
   // "W+hFbe%NbG[r]g!"  jwt secret
   //db "codialo_production"
   
const production =  {
    name: 'production',
    asset_path: process.env.CODIALO_ASSET_PATH,
    session_cookie_key: process.env.CODIALO_SESSION_COOKIE_KEY,
    db: process.env.CODIALO_DB,
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.CODIALO_GMAIL_USERNAME,
            pass: process.env.CODIALO_GMAIL_PASSWORD
        }
    },
    google_client_id: process.env.CODIALO_GOOGLE_CLIENT_ID,
    google_client_secret: process.env.CODIALO_GOOGLE_CLIENT_SECRET,
    google_call_back_url: process.env.CODIALO_GOOGLE_CALLBACK_RURL,
    jwt_secret : process.env.CODIALO_JWT_SECRET,
    morgan: {
        mode: 'combined',
        options: {stream: accessLogStream}
    }
}




// module.exports = development;
module.exports = eval(process.env.CODIALO_ENVIRONMENT) == undefined ? development : eval(process.env.CODIALO_ENVIRONMENT);