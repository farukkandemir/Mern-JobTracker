import React, {useContext} from "react";
import {Context} from "../context/Context";
import Job from "./Job";

function Jobs() {
  const {user, dispatch} = useContext(Context);

  function handleLogOut() {
    dispatch({type: "LOG_OUT"});
  }

  return (
    <article className="">
      <div className="flex justify-end gap-5">
        <p className="text-xl">
          Hello, <span>{user.username.toUpperCase()}</span>
        </p>
        <button className="bg-purple-600 text-white px-2" onClick={handleLogOut}>
          LogOut
        </button>
      </div>

      <div className="mt-10 w-1/2 mx-auto">
        <form className="shadow-md bg-white px-5 flex flex-col items-center justify-center gap-5 ">
          <h3 className="text-2xl font-semibold text-center">New Job</h3>
          <div>
            <label htmlFor="company">Company</label>
            <input type="text" name="company" />
          </div>

          <div>
            <label htmlFor="position">Position</label>
            <input type="text" name="position" />
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

      {user.jobs.length !== 0 ? (
        <article className="grid grid-cols-3 gap-2 mt-5 h-full">
          {user.jobs.map((job, index) => (
            <Job key={index} job={job} />
          ))}
        </article>
      ) : (
        <article className="flex items-center justify-center h-full">
          <h1 className="text-2xl mt-10">There is no job to display</h1>
        </article>
      )}
    </article>
  );
}

export default Jobs;
