const express = require('express');
const {getPackages, addPackage} = require('../controllers/packageController');

const router = express.Router();



router.get('/', getPackages);

router.post('/', addPackage);


module.exports = router