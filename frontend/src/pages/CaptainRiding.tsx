import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ConfirmedRide from "../components/ConfirmRide";
import FinishRide from "../components/FinishRide";
import { useGSAP } from "@gsap/react";
const CaptainRiding = () => {
  // const [finishRide, setFinishRide] = useState<boolean>(false);
  // const finishRideRef = useRef<HTMLDivElement>(null);
  // useGSAP(() => {
  //   if (finishRide) {
  //     gsap.to(finishRideRef.current, {
  //       transform: "translateY(0)",
  //     });
  //   } else {
  //     gsap.to(finishRideRef.current, {
  //       transform: "translateY(100%)",
  //     });
  //   }
  // }, [finishRide]);
  return (
    <div className="h-screen">
      <div className="fixed w-full flex justify-between items-center rounded-full mt-1">
        <img className="w-20 ml-1" src="./Uber_logo.png" alt="logo" />{" "}
        <Link to="/home" className="bg-white px-2 py-1 rounded-full mr-1">
          <i className="text-xl text-gray-500 ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5 ">
        <img
          className=" w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/5 bg-yellow-300 rounded-t-2xl flex justify-center">
        <h1 className="absolute text-3xl text-gray-500">
          <i className="ri-arrow-down-wide-line"></i>
        </h1>
        <div className="flex flex-row  items-center gap-32">
          <h1 className="text-2xl font-bold">4km</h1>
          <button className="px-5 bg-green-400 rounded-xl text-xl py-2 text-white">
            Complete Ride
          </button>
        </div>
        {/* <FinishRide setFinishRide={setFinishRide} /> */}
      </div>
    </div>
  );
};
export default CaptainRiding;
