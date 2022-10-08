##blankconst development = {
    name: 'development',
    asset_path: '/assets',
    session_cookie_key: 'blahsomething',
    db: 'codialo_development',
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'saibys@saibys.com',
            pass: 'votdtatdvmqvotpq'
        }
    },
   
    
    jwt_secret: 'codialo',
    google_clientID: "200918686716-j1vvvhmchgla5hkc5ur6cvb60i5efg1f.apps.googleusercontent.com",
    google_clientSecret: "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",
    google_callbackURL: "http://localhost:8000/users/auth/google/callback",
}


const production =  {
    name: 'production'
}



module.exports = development;
// "Un}VWl)~nazs3{w" sessioncookies 
   // "W+hFbe%NbG[r]g!"  jwt secret
   //db "codialo_production"

export CODIALO_ASSET_PATH="./public/assets"
export CODIALO_SESSION_COOKIE_KEY="Un}VWl)~nazs3{w"
export CODIALO_DB="codialo_production"
export CODIALO_GMAIL_USERNAME="saibytruth@gmail.com"
export CODIALO_GMAIL_PASSWORD="difxiasdohqykxha"
export CODIALO_GOOGLE_CLIENT_ID="200918686716-j1vvvhmchgla5hkc5ur6cvb60i5efg1f.apps.googleusercontent.com"
export CODIALO_GOOGLE_CLIENT_SECRET="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"
export CODIALO_GOOGLE_CALLBACK_RURL="http://localhost:8000/users/auth/google/callback"
export CODIALO_ENVIRONMENT="production"
export CODIALO_JWT_SECRET="W+hFbe%NbG[r]g!"