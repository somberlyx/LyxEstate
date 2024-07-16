import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-pharlap-800 text-3xl text-center font-semibold my-7">
        Sign Up
      </h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
        />
        <input
          type="text"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          type="text"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
        />
        <button className="bg-bisonHide-400 text-white p-3 uppercase rounded-lg hover:opacity-95 disabled:opacity-80">
          Sign up
        </button>
      </form>
      <div className="flex gap-2 mt-5 italic">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-pharlap-900">Sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
