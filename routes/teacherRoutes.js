const express = require('express');
const { uploadResource, createSchedule, upload } = require('../controllers/teacherController');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

router.post('/upload', authenticate, upload.single('file'), uploadResource);
router.post('/schedules', authenticate, createSchedule);

module.exports = router;
