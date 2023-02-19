const express =require('express')
const serviceController = require('./../controllers//serviceController');


router.post('/',serviceController.getAllUsers);

module.exports= router;