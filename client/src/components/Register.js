import React, {useState} from "react";
import {Link} from "react-router-dom";
// import {api} from "../api/axios";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const result = await axios.post("/api/register", {
      username,
      email,
      password,
    });
    result.data && setMsg(result.data.msg);
    setInterval(() => {
      window.location.replace("/login");
    }, 2000);
  }

  return (
    <article className="h-5/6 flex items-center justify-center">
      <form
        className="shadow-md bg-white px-5 flex flex-col items-center justify-center gap-5"
        onSubmit={handleSubmit}
        method="POST"
        action="/api/register"
      >
        <h3 className="text-2xl font-semibold text-center">Register</h3>
        {msg && <h2 className="text-green-700">{msg}</h2>}
        <div>
          <label htmlFor="name">Username</label>
          <input
            type="text"
            name="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
          <p className="inline mr-2">Already a member?</p>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </article>
  );
}

export default Register;
