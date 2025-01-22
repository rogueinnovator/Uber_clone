import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { captainSignUp } from "../apis/captain.api";
export interface CaptainSignUp {
  fullName: object;
  password: string;
  email: string;
  vehicle: object;
}
const CaptainSignup = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [vehicleColor, setVehicleColor] = useState<string>("");
  const [vehiclePlate, setVehiclePlate] = useState<string>("");
  const [vehicleCapacity, setVehicleCapacity] = useState<number>(0);
  const [vehicleType, setVehicleType] = useState<string | null>("");
  const navigate = useNavigate();
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const captainData: CaptainSignUp = {
      fullName: { firstName, lastName },
      email,
      password,
      vehicle: { vehicleColor, vehiclePlate, vehicleCapacity, vehicleType },
    };
    const data = await captainSignUp(captainData);
    localStorage.setItem("token", data.token);
    navigate("/captain-home");
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
            {["firstname", "lastname"].map((placeholder, index) => (
              <input
                key={index}
                type="text"
                onChange={(e) =>
                  index === 0
                    ? setFirstName(e.target.value)
                    : setLastName(e.target.value)
                }
                value={index === 0 ? firstName : lastName}
                placeholder={placeholder}
                className="form"
                required
              />
            ))}
          </div>
          <h3 className="my-2 text-xl font-bold"> Whats your email</h3>
          {["email", "password"].map((input, index) => (
            <input
              key={index}
              type={input}
              onChange={(e) =>
                index === 0
                  ? setEmail(e.target.value)
                  : setPassword(e.target.value)
              }
              value={index === 0 ? email : password}
              name={index === 0 ? email : password}
              placeholder={input}
              required
              className={`my-1 form ${index === 1 ? "mb-3" : ""}`}
            />
          ))}
          <h3 className="my-2 text-xl font-bold">Vehicle information </h3>

          <div className="inline-flex flex-row justify-center mb-2">
            {["vehicle color", "vehicle plate"].map((input, index) => (
              <input
                className="form"
                key={index}
                required
                type="text"
                value={
                  index === 0
                    ? vehicleColor
                    : index === 1
                    ? vehiclePlate
                    : vehicleType
                }
                placeholder={input}
                name={
                  index === 0
                    ? vehicleColor
                    : index === 1
                    ? vehiclePlate
                    : vehicleType
                }
                onChange={(e) =>
                  index === 0
                    ? setVehicleColor(e.target.value)
                    : index === 1
                    ? setVehiclePlate(e.target.value)
                    : setVehicleCapacity(Number(e.target.value))
                }
              />
            ))}
          </div>
          <div className="inline-flex flex-row justify-center mb-3 w-full">
            <input
              className="form"
              type="number"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(Number(e.target.value))}
              placeholder="Vehicle capacity"
              required
            />
            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="form"
            >
              <option value="car">Car</option>
              <option value="motercycle">bike</option>
              <option value="auto">Auto</option>
            </select>
          </div>
          <button className="w-full bg-black p-2 rounded-lg text-white font-bold text-lg">
            Sign Up as Captain
          </button>
        </form>
        <p className="text-center pt-3 ">
          Already an account ?{" "}
          <Link
            to="/captain-login"
            className="text-blue-800 hover:text-red-400"
          >
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

export default CaptainSignup;
