import React, { useState } from "react";
import { Link } from "react-router-dom";
import { captainSignIn } from "../apis/captain.api";
export interface CaptainSignIn {
  email: string;
  password: string;
}
const CaptainLogin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    //this allow access to the form element and in some cases edit the form element
    e.preventDefault();
    const captainData: CaptainSignIn = {
      email,
      password,
    };
    const data = await captainSignIn(captainData);
    console.log(data);
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
            placeholder="example@gmail.com"
            className="form placeholder:text-sm"
          />
          <h3 className="text-xl my-2 font-bold"> Enter your password</h3>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            value={password}
            placeholder="password"
            className="form placeholder:text-sm mb-3"
          />
          <button className="w-full bg-black p-2 rounded-lg text-white font-bold text-lg">
            login
          </button>
        </form>
        <p className="text-center pt-3 ">
          new here ?{" "}
          <Link
            to="/captain-signup"
            className="text-blue-800 hover:text-red-400"
          >
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
