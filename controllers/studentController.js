const Schedule = require('../models/scheduleModel');
const Resource = require('../models/resourceModel');

const getSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.status(200).send({ schedules });
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

module.exports = { getSchedules, getResources };
