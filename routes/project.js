"use strict";

var express = require('express');
var path = require('path');

var router = express.Router();

router.get('/project', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../views/project.html'));
});

module.exports = router;
