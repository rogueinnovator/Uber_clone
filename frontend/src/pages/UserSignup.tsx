import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../apis/user.api";
import { useUserContext } from "../context/UserContext";
export interface SignUpUser {
  fullName: object;
  email: string;
  password: string;
}
const UserSignUp = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUserContext;
  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fullName = { firstName: firstName, lastName: lastName };
    const userData: SignUpUser = { fullName, email, password };
    const user = await signUp(userData);
    localStorage.setItem("token", user.token);
    navigate("/home");
    //this allow access to the form element and in some cases edit the form element
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
          <h3 className="my-2 text-xl font-bold"> Whats your name</h3>
          <div className="inline-flex justify-center items-start">
            <input
              type="name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              value={firstName}
              name="email"
              placeholder="firstname"
              className="bg-[#eeeeee] border rounded-xl mr-2 p-3 w-full placeholder:text-sm"
            />
            <input
              type="name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              value={lastName}
              name="email"
              placeholder="lastname"
              className="bg-[#eeeeee] border rounded-xl p-3 w-full placeholder:text-sm"
            />
          </div>
          <h3 className="my-2 text-xl font-bold"> Whats your email</h3>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            name="email"
            placeholder="example@gmail.com"
            className="bg-[#eeeeee] border rounded-xl p-3 w-full placeholder:text-sm"
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
            className="bg-[#eeeeee] p-3 border rounded-xl w-full mb-8 placeholder:"
          />
          <button className="w-full bg-black p-2 rounded-lg text-white font-bold text-lg">
            Sign Up
          </button>
        </form>
        <p className="text-center pt-3 ">
          Already an account ?{" "}
          <Link to="/user-login" className="text-blue-800 hover:text-red-400">
            {" "}
            login here
          </Link>{" "}
        </p>
      </div>
      <div>
        {" "}
        <p></p>
      </div>
    </div>
  );
};

export default UserSignUp;
