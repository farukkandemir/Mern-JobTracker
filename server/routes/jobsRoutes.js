const {
  createJob,
  updateJob,
  deleteJob,
  getJobs,
  getSingleJob,
} = require("../controllers/jobController");

const router = require("express").Router();

router.route("/").get(getJobs).post(createJob);

router.route("/:id").put(updateJob).delete(deleteJob).get(getSingleJob);

module.exports = router;
