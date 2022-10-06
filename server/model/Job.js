const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {timestamps: true}
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
