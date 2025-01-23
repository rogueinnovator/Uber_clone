import React, { useState, useTransition } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../apis/user.api";
import { useUserContext } from "../context/UserContext";
export interface SignInUser {
  email: string;
  password: string;
}
const UserLogin: React.FC = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPending, startTransition] = useTransition();
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData: SignInUser = { email, password };
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const data = await signIn(userData);
    setUser(data.user);
    localStorage.setItem("token", data.token);
    navigate("/home");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-16 mb-10" src="Uber_logo.png" alt="Uber logo" />
        <form
          onSubmit={(e) =>
            startTransition(() => {
              submitHandler(e);
            })
          }
        >
          <h3 className="my-2 text-xl font-bold">What's your email?</h3>

          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            placeholder="example@gmail.com"
            className="form"
            required
          />
          <h3 className="text-xl my-2 font-bold">Enter your password</h3>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name="password"
            placeholder="Password"
            className="form  mb-4"
            required
          />
          <button
            disabled={isPending}
            className={`w-full bg-black p-2 rounded-lg text-white font-bold text-lg ${
              isPending ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Login
          </button>
        </form>
        <p className="text-center pt-3">
          New here?{" "}
          <Link to="/user-signup" className="text-blue-800 hover:text-red-400">
            Create account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captain-signup"
          className="bg-[#10b461] flex items-center justify-center p-2 rounded-lg text-white font-bold text-lg"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
