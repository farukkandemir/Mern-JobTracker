const Job = require("../model/Job");
const User = require("../model/User");
///------Jobs Controllers---------////

///-------GetAllJobs-----------////

const getJobs = async (req, res) => {
  const username = req.query.user;

  // return res.json(username);
  try {
    if (username) {
      const userJobs = await User.findOne({username}, {jobs: 1, _id: 0}).populate("jobs");
      res.status(200).json(userJobs);
    } else {
      res.status(400).json({msg: "Something wrong with the username"});
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

////------Create a Job-----------////

const createJob = async (req, res) => {
  const newJob = req.body;

  if (!newJob) return res.status(400).json({msg: "Please fill all fields"});

  const user = await User.findOne({username: req.body.username});

  try {
    const result = await Job.create({
      company: newJob.company,
      position: newJob.position,
      username: newJob.username,
    });

    try {
      user.jobs.push(result);
      await user.save();
    } catch (error) {
      res.status(400).son(error);
    }

    res.status(200).json({msg: "Job is successfully created", result});
  } catch (error) {
    res.status(500).json(error);
  }
};

////------Update a Job-----------////

const updateJob = async (req, res) => {
  const {jobId} = req.params;

  try {
    const job = await Job.findById(jobId);
    if (job.username === req.body.username) {
      try {
        const updatedJob = Job.findByIdAndUpdate(jobId, {$set: req.body}, {new: true});
        res.status(200).json({msg: "Your job is successfully updated", updatedJob});
      } catch (error) {
        res.status(500).json(error.message);
      }
    } else {
      res.status(401).json({msg: "You can only update your job"});
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

/////--------Delete Job-------------///////

const deleteJob = async (req, res) => {
  const {jobId} = req.params;

  try {
    const job = await Job.findById(jobId);
    if (job.username === req.body.username) {
      try {
        await job.delete();
        res.status(200).json({msg: "Your job is successfully deleted"});
      } catch (error) {
        res.status(500).json(error.message);
      }
    } else {
      res.status(401).json({msg: "You can only delete your job"});
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getSingleJob = (req, res) => {};

module.exports = {getJobs, createJob, updateJob, deleteJob, getSingleJob};
