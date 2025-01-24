const express = require('express');
const { uploadResource, upload } = require('../controllers/resourceController');
const { createSchedule } = require('../controllers/scheduleController');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

router.post('/upload', authenticate, upload.single('file'), uploadResource);
router.post('/schedules', authenticate, createSchedule);

module.exports = router;
