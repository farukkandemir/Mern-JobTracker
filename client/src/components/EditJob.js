import React from "react";
import {Link} from "react-router-dom";

function EditJob() {
  return (
    <div className="h-5/6 flex flex-col items-center justify-center">
      <Link to="/dashboard">
        <button className="bg-violet-600 text-white p-2 hover:bg-violet-900 transition ease-linear duration-300 ">
          DashBoard
        </button>
      </Link>

      <form className="mt-5 shadow-md bg-white px-5 flex flex-col items-center justify-center gap-5 ">
        <h3 className="text-2xl font-semibold text-center">Update Job</h3>
        <div>
          <label htmlFor="company">Company</label>
          <input type="text" name="company" />
        </div>

        <div>
          <label htmlFor="position">Position</label>
          <input type="text" name="position" />
        </div>

        <div>
          <label htmlFor="status">Status</label>
          <select name="status">
            <option value="pending">Pending</option>
            <option value="interview">Interview</option>
            <option value="declined">Declined</option>
          </select>
        </div>

        <div>
          <button
            type="submit"
            className="bg-purple-700 w-full rounded-lg text-white py-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditJob;
