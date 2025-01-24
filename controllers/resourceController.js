const multer = require('multer');
const path = require('path');

const Resource = require('../models/resourceModel');
const { get } = require('http');

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

const getResources = async (req, res) => {
  try {
    const resources = await Resource.find();
    res.status(200).send({ resources });
  } catch (error) {
    res.status(500).send({ error: 'An error occurred' });
  }
};



module.exports = { uploadResource, upload,getResources };
