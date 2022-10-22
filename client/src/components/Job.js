import React, {useContext} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import moment from "moment";
import {Context} from "../context/Context";
import {app} from "../utils/axiosConfig";

function Job({job, id}) {
  const {dispatch} = useContext(Context);

  async function handleDelete() {
    const res = await app.delete(`/api/users/jobs/${id}`);
    dispatch({type: "DEL_JOB", payload: id});

    console.log(res);
  }

  return (
    <div className="bg-gray-50 shadow-lg h-40 p-2 flex flex-col justify-between">
      <div className="flex justify-between">
        <p className="font-bold text-xl ">{job.company}</p>
        <small>{moment(job.createdAt).format("MMM Do YYYY")}</small>
      </div>
      <div className="">
        <span className="bg-gray-200 p-2 rounded-lg">{job.position}</span>
      </div>
      <div className="flex justify-between">
        <div>
          <Link to={`/edit/${id}`}>
            <button className="text-blue-400 mr-4">Edit</button>
          </Link>
          <button className="text-red-400" onClick={handleDelete}>
            Delete
          </button>
        </div>
        <p className="bg-violet-200 px-2">Pending</p>
      </div>
    </div>
  );
}

export default Job;
