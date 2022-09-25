const express = require('express');
const router = express.Router();
const user_conroller  = require('../controllers/user_controller')
const passport = require('passport');
// respond with "hello world" when a GET request is made to the homepag, (req, res) => {

// console.log("routerloaded");
router.get('/profile',passport.checkAuthentication, user_conroller.profile);

router.get('/sign-up', user_conroller.signUp);
router.get('/sign-in', user_conroller.signIn);
router.post('/create', user_conroller.create);
router.get('/sign-out', user_conroller.destroySession);

//use passport middleware
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in'},

),user_conroller.createSession);


// router.post('/create-session', user_conroller.createSession);
module.exports =router;

