// route to handle requests

const express = require('express');
const { getChecklistResults } = require('./checklistController');

const router = express.Router();

router.get('/checklist', getChecklistResults);

module.exports = router;
