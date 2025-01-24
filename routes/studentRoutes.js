const express = require('express');
const { getSchedules, getResources } = require('../controllers/studentController');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

router.get('/schedules', authenticate, getSchedules);
router.get('/resources', authenticate, getResources);

module.exports = router;
