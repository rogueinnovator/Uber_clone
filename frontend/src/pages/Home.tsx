import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
const Home = () => {
  const user = useUserContext();
  console.log(user);

  return (
    <div>
      <div className="bg-cover bg-bottom bg-[url(bg_logo.jpg)] h-screen pt-8 w-full flex justify-between flex-col  bg-red-400">
        <img className="w-16 ml-4" src="Uber_logo.png" alt="logo" />
        <div className="bg-white py-5 px-10">
          <h2 className="text-2xl font-bold pl-7 ">Get started with Uber</h2>
          <Link
            to="/user-login"
            className=" relative flex items-center justify-center w-full bg-black text-white font-bold py-2 rounded mt-2 "
          >
            {" "}
            continue
            <span className="absolute right-4">
              {" "}
              <ArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
