import React from "react";
interface ConfirmedRideProps {
  confirmRideRef: React.RefObject<HTMLDivElement>;
  setConfirmRide: React.Dispatch<React.SetStateAction<boolean>>;
  vehicleData: Array<{
    dataType: { imageUrl: string; type: string };
    time: string;
    description: string;
    price: string;
  }>;
}
const ConfirmedRide: React.FC<ConfirmedRideProps> = (props) => {
  return (
    <div
      ref={props.confirmRideRef}
      className="fixed z-10 bottom-0 rounded-xl w-full translate-y-full p-2 py-8 bg-white"
    >
      {" "}
      <h5 className="text-3xl font-light text-slate-300 absolute text-center top-0  right-1 w-full">
        {" "}
        <i className="ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl text-center font-bold mb-5">Confirm Vehicle </h3>
      <div className="flex flex-col justify-center items-center gap-2">
        <img
          className="w-44 "
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png"
          alt=""
        />
        <div className="w-full mb-3">
          <div className="p-3 flex  items-center gap-3">
            <i className="ri-map-pin-fill"></i>
            <div className="flex flex-col  gap-1">
              <h4 className="text-xl font-bold">562/11-A</h4>
              <h4 className="font-sem</div>ibold text-slate-400">
                Peshawar district charsadda
              </h4>
            </div>
          </div>
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

        <button className="w-full bg-green-300 py-3 rounded-xl text-white font-semibold">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmedRide;
