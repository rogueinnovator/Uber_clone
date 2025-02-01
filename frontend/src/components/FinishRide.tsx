import React, { SetStateAction } from "react";
import { Link } from "react-router-dom";
import OTP from "./OTP";
interface Props {
  confirmRideRef: React.RefObject<HTMLDivElement>;
  setRidePopUp: React.Dispatch<SetStateAction<boolean>>;
}
const FinishRide: React.FC<Props> = (props) => {
  return (
    <div
      ref={props.confirmRideRef}
      className="fixed z-10 bottom-0 rounded-xl w-full translate-y-full p-2 py-8 bg-white h-screen"
    >
      <h5
        onClick={() => props.setFinishRide(false)}
        className="text-3xl font-light text-slate-300 absolute text-center top-0  right-1 w-full"
      >
        {" "}
        <i className="ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl text-center font-extrabold text-gray-600 mb-5">
        This is confirm Ride{" "}
      </h3>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="flex flex-row justify-around items-center bg-yellow-400 py-3 w-full rounded-xl gap-4">
          <img
            className="w-11 h-11 rounded-full "
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <h2 className="text-lg font-semibold  text-nowrap">
            Muhammad Huzaifa
          </h2>
          <h2 className="text-lg font-bold ">2.2 km</h2>
        </div>
        <div className="w-full mb-3">
          <div className="p-3 flex  items-center gap-2">
            <i className="ri-map-pin-fill"></i>
            <div className="flex flex-col  gap-1">
              <h4 className="text-xl font-bold">562/11-A</h4>
              <h4 className="font-semibold text-slate-400">
                Peshawar district charsadda
              </h4>
            </div>
          </div>
          <div className="p-3 flex  items-center gap-2 border-t-2">
            <i className="ri-map-pin-user-fill"></i>
            <div className="flex flex-col gap-1">
              <h4 className="text-xl font-bold">Third Wave Coffee</h4>
              <h4 className="font-semibold text-slate-400">
                Mera utmanzai hafiz jee qala shaheedan road
              </h4>
            </div>
          </div>
          <div className="p-3 flex  items-center gap-2 border-t-2">
            <i className="ri-cash-line"></i>
            <div className="flex flex-col gap-1">
              <h4 className="text-xl font-bold">$193.20</h4>
              <h4 className="font-semibold text-slate-400">Cash Cash</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed flex flex-col justify-center items-center bottom-5 left-1/2 transform -translate-x-1/2">
        <OTP />
        <button
          onClick={() => {
            props.setRidePopUp(false);
            props.setRidePopUp(false);
          }}
          className=" bg-red-600 py-3 rounded-xl text-white font-semibold px-28"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default FinishRide;
