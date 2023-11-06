import React from "react";
import { Link } from "react-router-dom";
import error from "../../assets/others/error.1.png"

const ErrorPage = () => {
  return (
    <div className="text-center">
      <img className="mx-auto max-h-screen" src={error} alt="" />
      <Link to="/" >
        <button className="btn btn-accent relative -top-[100px] text-white">Back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
