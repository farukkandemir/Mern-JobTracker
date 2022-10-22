import React, {useContext, useRef} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {Context} from "../context/Context";
import {app} from "../utils/axiosConfig";

function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const {dispatch, isFetching, error} = useContext(Context);

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch({type: "LOGIN_START"});
    try {
      const res = await app.post("/api/login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {user: res.data.foundUser},
      });
      navigate("/dashboard");
    } catch (error) {
      dispatch({type: "LOGIN_FAILURE"});
    }
  }

  return (
    <article className="h-5/6 flex items-center justify-center">
      <form
        className="shadow-md bg-white px-5 flex flex-col items-center justify-center gap-5"
        onSubmit={handleSubmit}
      >
        <h3 className="text-2xl font-semibold text-center">Login</h3>
        {error && <h2 className="text-red-600">Something is Wrong</h2>}
        <div>
          <label htmlFor="name">Username</label>
          <input type="text" name="name" ref={usernameRef} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" ref={passwordRef} />
        </div>

        <div>
          <button
            type="submit"
            className="bg-purple-700 w-full rounded-lg text-white py-2"
          >
            {isFetching ? "Logging In" : "Submit"}
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
