const express = require('express');
const router = express.Router();
const user_conroller  = require('../controllers/user_controller')
// respond with "hello world" when a GET request is made to the homepag, (req, res) => {

console.log("routerloaded");
router.get('/profile', user_conroller.profile);

module.exports =router;