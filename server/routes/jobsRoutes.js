const {
  createJob,
  updateJob,
  deleteJob,
  getJobs,
} = require("../controllers/jobController");

const router = require("express").Router();

router.route("/").get(getJobs).post(createJob);

router.route("/:id").put(updateJob).delete(deleteJob);

module.exports = router;
