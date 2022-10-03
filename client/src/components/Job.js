import React from "react";
import {Link} from "react-router-dom";

function Job({job}) {
  return (
    <div className="bg-gray-50 shadow-lg h-40 p-2 flex flex-col justify-between">
      <div className="flex justify-between">
        <p className="font-bold text-xl ">{job.company}</p>
        <small>10/03/2022</small>
      </div>
      <div className="">
        <span className="bg-gray-200 p-2 rounded-lg">{job.position}</span>
      </div>
      <div className="flex justify-between">
        <div>
          <Link to="/edit/:id">
            <button className="text-blue-400 mr-4">Edit</button>
          </Link>
          <button className="text-red-400">Delete</button>
        </div>
        <p className="bg-violet-200 px-2">Pending</p>
      </div>
    </div>
  );
}

export default Job;
