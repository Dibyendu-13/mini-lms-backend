const multer = require('multer');
const Resource = require('../models/resourceModel');
const Schedule = require('../models/scheduleModel');

// Set up file storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

const uploadResource = async (req, res) => {
  const { name } = req.body;
  const filePath = `/uploads/${req.file.filename}`;

  try {
    const resource = new Resource({ name, filePath, userId: req.userId });
    await resource.save();
    res.status(201).send({ message: 'Resource uploaded successfully' });
  } catch (error) {
    res.status(500).send({ error: 'An error occurred' });
  }
};

const createSchedule = async (req, res) => {
  const { title, time } = req.body;

  try {
    const schedule = new Schedule({ title, time, userId: req.userId });
    await schedule.save();
    res.status(201).send({ message: 'Schedule created successfully' });
  } catch (error) {
    res.status(500).send({ error: 'An error occurred' });
  }
};

module.exports = { uploadResource, createSchedule, upload };
