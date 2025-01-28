import React from "react";
interface Props {
  vehicleFoundRef: React.RefObject<HTMLDivElement>;
  setVehicleFound: React.Dispatch<React.SetStateAction<boolean>>;
}
const LookingForDriver: React.FC<Props> = (props) => {
  return (
    <div
      ref={props.vehicleFoundRef}
      className="fixed z-10 bottom-0 rounded-xl w-full translate-y-full p-2 py-8 bg-white"
    >
      <h5
        onClick={() => {
          props.setVehicleFound(false);
        }}
        className="text-3xl font-light text-slate-300 absolute text-center top-0  right-1 w-full"
      >
        {" "}
        <i className="ri-arrow-down-wide-fill"></i>
      </h5>
      <div className="flex justify-between items-center">
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
      </div>
    </div>
  );
};

export default LookingForDriver;
