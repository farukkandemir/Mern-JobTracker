const Job = require("../model/Job");
const User = require("../model/User");
///------Jobs Controllers---------////

///-------GetAllJobs-----------////

const getJobs = async (req, res) => {
  const username = req.query.user;

  // return res.json(username);
  try {
    if (username) {
      const result = await Job.find({username});

      res.status(200).json(result);
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

  try {
    const result = await Job.create({
      company: newJob.company,
      position: newJob.position,
      username: newJob.username,
    });

    res.status(200).json({msg: "Job is successfully created", result});
  } catch (error) {
    res.status(500).json(error);
  }
};

////------Update a Job-----------////

const updateJob = async (req, res) => {
  const {jobId} = req.params;

  try {
    const updatedJob = await Job.findByIdAndUpdate(jobId, {$set: req.body}, {new: true});
    res.status(200).json({msg: "Your job is successfully updated", updatedJob});
  } catch (error) {
    res.status(500).json(error.message);
  }
};

/////--------Delete Job-------------///////

const deleteJob = async (req, res) => {
  const {jobId} = req.params;

  try {
    const job = await Job.deleteOne(jobId);

    res.status(200).json({msg: "Your job is successfully deleted", job});
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getSingleJob = async (req, res) => {
  const {jobId} = req.params;

  try {
    const job = await Job.findById(jobId);

    res.status(200).json(job);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {getJobs, createJob, updateJob, deleteJob, getSingleJob};
