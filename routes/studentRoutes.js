const express = require('express');
const { getSchedules } = require('../controllers/scheduleController');
const { getResources } = require('../controllers/resourceController');

const authenticate = require('../middleware/authenticate');

const router = express.Router();

router.get('/schedules', authenticate, getSchedules);
router.get('/resources', authenticate, getResources);

module.exports = router;
