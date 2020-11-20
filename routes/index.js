const express = require('express');
const router = express.Router();


console.log("router loaded");


router.get('/',require('../controllers/home_Controller').home);
router.use('/users', require('./users'))

module.exports = router;
