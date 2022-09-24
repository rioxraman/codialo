const express = require('express');
const router = express.Router();
const hController  = require('../controllers/home_controller')
// respond with "hello world" when a GET request is made to the homepag, (req, res) => {

console.log("routerloaded");
router.get('/', hController.homeControl);
router.use('/users', require('./users'));   

// for anty further routes, access from here
// router.use('/routerName', require('./routerfile));

module.exports =router;