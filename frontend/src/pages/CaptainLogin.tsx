import React, { useState } from "react";
import { Link } from "react-router-dom";
const CaptainLogin = () => {
  interface captain {
    name: string;
    password: string;
  }
  const [email, setEmail] = useState<string>();
  const [passowrd, setPassword] = useState<string>();
  const [captin, setCaptain] = useState<captain<string>>({});
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    //this allow access to the form element and in some cases edit the form element
    e.preventDefault();
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      {" "}
      <div>
        {" "}
        <img className="w-16 mb-10" src="Uber_logo.png" alt="logo" />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="my-2 text-xl font-bold"> Whats your email</h3>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            name="email"
            placeholder="exampl@gmail.com"
            className="bg-[#eeeeee] border rounded-xl p-3 w-full placeholder:text-sm"
          />
          <h3 className="text-xl my-2 font-bold"> Enter your password</h3>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            value={passowrd}
            placeholder="password"
            className="bg-[#eeeeee] p-3 border rounded-xl w-full mb-8 placeholder:"
          />
          <button className="w-full bg-black p-2 rounded-lg text-white font-bold text-lg">
            login
          </button>
        </form>
        <p className="text-center pt-3 ">
          new here ?{" "}
          <Link to="/user-signup" className="text-blue-800 hover:text-red-400">
            {" "}
            Register as captain
          </Link>{" "}
        </p>
      </div>
      <div>
        {" "}
        <Link
          to="/user-login"
          className="bg-[#10b461] flex items-center justify-center   p-2 rounded-lg text-white font-bold text-lg"
        >
          sign in as user
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
