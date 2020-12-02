// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line
router.use('/service-name-one', require('./views/service-name-one/_routes'));
router.use('/create-blog', require('./views/create-blog/_routes'));

module.exports = router;
