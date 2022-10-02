import React from "react";
import {Link} from "react-router-dom";

function Login() {
  return (
    <article className="h-5/6 flex items-center justify-center">
      <form className="shadow-md bg-white px-5 flex flex-col items-center justify-center gap-5 ">
        <h3 className="text-2xl font-semibold text-center">Register</h3>
        <div>
          <label htmlFor="name">Username</label>
          <input type="text" name="name" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>

        <div>
          <button
            type="submit"
            className="bg-purple-700 w-full rounded-lg text-white py-2"
          >
            Submit
          </button>
        </div>

        <div className="text-center">
          <p className="inline mr-2">Not a member yet?</p>
          <Link to="/register">Sign Up</Link>
        </div>
      </form>
    </article>
  );
}

export default Login;
