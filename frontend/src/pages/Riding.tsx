import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link
        to="/home"
        className=" fixed bg-white w-10 h-10 flex justify-center items-center rounded-full top-1 right-1 "
      >
        <i className="text-xl text-gray-500 ri-home-4-line"></i>
      </Link>
      <div className="h-1/2 ">
        <img
          className=" w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="flex justify-between items-center p-4">
        <img
          className="w-32"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png"
          alt=""
        />
        <div className="text-right pr-2">
          <h2 className="text-xl font-medium text-gray-600">Huzaifa</h2>
          <h4 className="font-bold text-2xl">P81761</h4>
          <h2 className="text-gray-600 font-medium">Maruthi Suzuki</h2>
          <span>
            <i className="ri-star-fill"> 4.9</i>
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="w-full mb-3">
          <div className="p-3 flex  items-center gap-3 border-t-2">
            <i className="ri-map-pin-user-fill"></i>
            <div className="flex flex-col gap-1">
              <h4 className="text-xl font-bold">Third Wave Coffee</h4>
              <h4 className="font-semibold t</div>ext-slate-400">
                Mera utmanzai hafiz jee qala shaheedan road
              </h4>
            </div>
          </div>
          <div className="p-3 flex  items-center gap-3 border-t-2">
            <i className="ri-cash-line"></i>
            <div className="flex flex-col gap-1">
              <h4 className="text-xl font-bold">$193.20</h4>
              <h4 className="font-semibold text-slate-400">Cash Cash</h4>
            </div>
          </div>
        </div>
      </div>
      <button className="fixed bottom-3 w-full bg-green-300 py-3 rounded-xl text-white font-semibold">
        Make Payment
      </button>{" "}
    </div>
  );
};
export default Riding;
