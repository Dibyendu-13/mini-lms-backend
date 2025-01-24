const Schedule = require('../models/scheduleModel');

const getSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.status(200).send({ schedules });
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

module.exports = {createSchedule, getSchedules };
