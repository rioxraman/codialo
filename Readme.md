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