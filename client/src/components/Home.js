import React from "react";
import img from "../assets/img.svg";
import {Link} from "react-router-dom";

function Home() {
  return (
    <main className="flex items-center h-5/6 justify-center gap-10">
      <div className="p-4 flex-1">
        <h1 className="font-bold text-4xl">Job Tracker App</h1>
        <p className="mt-5 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde natus placeat
          inventore explicabo amet beatae itaque, eaque blanditiis hic deserunt
          asperiores.
        </p>
        <Link to="/register">
          <button className="mt-4 bg-purple-800 text-white p-4 hover:transition hover:duration-300 hover:bg-purple-600 ">
            LogIn / Register
          </button>
        </Link>
      </div>
      <div className="flex-1">
        <img src={img} alt="logo" />
      </div>
    </main>
  );
}

export default Home;
