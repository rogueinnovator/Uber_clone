import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import RidePopUp from "../components/RidePopUp";
import gsap from "gsap";
import ConfirmRide from "../components/ConfirmRide";
const CaptainHome = () => {
  const [ridePopUp, setRidePopUp] = useState<boolean>(true);
  const captainDetailsRef = useRef<HTMLDivElement>(null);
  const ridePopUpRef = useRef<HTMLDivElement>(null);
  const [confirmRide, setConfirmRide] = useState<boolean>(false);
  const confirmRideRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (ridePopUp) {
      gsap.to(ridePopUpRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(ridePopUpRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [ridePopUp]);
  useGSAP(() => {
    if (confirmRide) {
      gsap.to(confirmRideRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmRideRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRide]);
  return (
    <div className="h-screen">
      <div className="fixed w-full flex justify-between items-center rounded-full mt-1">
        <img className="w-20 ml-1" src="./Uber_logo.png" alt="logo" />{" "}
        <Link to="/home" className="bg-white px-2 py-1 rounded-full mr-1">
          <i className="text-xl text-gray-500 ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-3/5 ">
        <img
          className=" w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      {/* <div className="h-2/5"> */}
      <CaptainDetails captainDetailsRef={captainDetailsRef} />
      {/* </div> */}
      <RidePopUp
        setRidePopUp={setRidePopUp}
        ridePopUpRef={ridePopUpRef}
        setConfirmRide={setConfirmRide}
      />

      <ConfirmRide
        confirmRideRef={confirmRideRef}
        setConfirmRide={setConfirmRide}
      />
    </div>
  );
};
export default CaptainHome;
