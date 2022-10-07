import React from "react";
import {Link} from "react-router-dom";

function NotFound() {
  return (
    <div className="h-5/6 flex flex-col gap-10 items-center justify-center">
      <h1 className="text-6xl font-extrabold">Not Found</h1>
      <Link to="/">
        <button className="bg-violet-300 p-4 rounded-lg hover:bg-violet-900 transition ease-linear duration-300 hover:text-white ">
          Back To Home Page
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
