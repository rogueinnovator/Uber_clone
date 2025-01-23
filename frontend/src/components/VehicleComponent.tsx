import React from "react";
interface VehiclePanelProps {
  vehiclePanelRef: React.RefObject<HTMLDivElement>;
  setVehiclePanel: React.Dispatch<React.SetStateAction<boolean>>;
  vehicleData: Array<{
    dataType: { imageUrl: string; type: string };
    time: string;
    description: string;
    price: string;
  }>;
  setConfirmRide: React.Dispatch<React.SetStateAction<boolean>>;
}

const VehicleComponent: React.FC<VehiclePanelProps> = ({
  vehiclePanelRef,
  setVehiclePanel,
  vehicleData,
  setConfirmRide,
}) => {
  return (
    <div
      ref={vehiclePanelRef}
      className="fixed z-10 bottom-0 rounded-xl w-full translate-y-full p-2 py-8 bg-white"
    >
      <h5
        className="text-3xl font-light text-slate-300 absolute text-center top-0  right-1 w-full"
        onClick={() => setVehiclePanel(false)}
      >
        {" "}
        <i className="ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-bold my-5 pl-4"> Choose a Vehicle</h3>
      {vehicleData.map((data, index) => (
        <div
          key={index}
          className="flex justify-start items-start gap-2 border active:border-slate-950 border-slate-400 p-2 rounded-xl my-1"
          onClick={() => setConfirmRide(true)}
        >
          {" "}
          <img className="h-16" src={data.dataType.imageUrl} alt="data" />
          <div className="w-1/2">
            <h4 className="font-bold text-xl inline-flex justify-between items-center">
              {data.dataType.type}{" "}
              <span className="text-gray-500 text-sm">
                <i className="ri-user-fill px-2"> 4</i>
              </span>
            </h4>
            <h5 className="inline-flex items-end font-medium">
              {data.time} <span className="pl-2 text-sm">15:24</span>
            </h5>
            <h3 className="font-medium text-gray-600">{data.description} </h3>
          </div>
          <h2 className="text-2xl font-semibold">{data.price}</h2>
        </div>
      ))}
    </div>
  );
};
export default VehicleComponent;
