import React from "react";
interface Props {
  captainDetailsRef: React.RefObject<HTMLDivElement>;
}
const CaptainDetails: React.FC<Props> = (props) => {
  return (
    <div ref={props.captainDetailsRef}>
      <div className="flex flex-row justify-start gap-6 items-center mt-9 ml-7">
        <img
          className="h-14 rounded-full"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
        <div className="flex flex-col justify-start ">
          <h2 className="font-semibold text-xl ">Muhammad Huzaifa</h2>
          <h4 className="text-gray-400 font-semibold">Basic Level</h4>
        </div>
      </div>
      <div className="bg-gray-200 flex flex-row justify-center items-center py-10 mx-4 mt-20 rounded-2xl gap-5">
        <div className="flex  flex-col justify-start items-center">
          <i className=" text-3xl  text-gray-500 ri-timer-line"></i>
          <h2 className="text-xl font-bold text-gray-900">12.12</h2>
          <h2 className="text-normal font-medium text-gray-500">
            Hours online
          </h2>
        </div>
        <div className="flex  flex-col justify-start items-center">
          <i className=" text-3xl  text-gray-500 ri-speed-up-line"></i>
          <h2 className="text-xl font-bold text-gray-900">12.12</h2>
          <h2 className="text-normal font-medium text-gray-500">
            Hours online
          </h2>
        </div>
        <div className="flex  flex-col justify-start items-center">
          <i className=" text-3xl  text-gray-500 ri-history-fill"></i>
          <h2 className="text-xl font-bold text-gray-900">12.12</h2>
          <h2 className="text-normal font-medium text-gray-500">
            Hours online
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
