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

server {
    listen 80;
    server_name saibys.com 54.82.10.220;
    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
     }
}
server {
  listen 443 ssl;
  server_name *.saibys.com;
  ssl_certificate /etc/letsencrypt/live/saibys.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/saibys.com/privkey.pem;
  include /etc/letsencrypt/options-ssl-nginx.conf;
  ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
  root /var/www/saibys.com;
  index index.html;
  location / {
    try_files $uri $uri/ =404;
  }
}
server {
    listen 80;
    server_name saibys.com 54.82.10.220;
    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
     }
}