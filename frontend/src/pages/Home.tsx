import React, { useRef, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import gsap from "gsap";
import VehicleComponent from "./../components/VehicleComponent";
import LocationPanel from "../components/LocationPanel.tsx";
import ConfirmedRide from "../components/ConfirmedRide.tsx";
import LookingForDriver from "../components/LookingForDriver.tsx";
const Home = () => {
  const { user } = useUserContext();
  const [destination, setDestination] = useState<string>("");
  const [picUpLocation, setPicUpLocation] = useState<string>("");
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false);
  const [vehiclePanel, setVehiclePanel] = useState<boolean>(false);
  const [confirmRide, setConfirmRide] = useState<boolean>(false);
  const [vehicleFound, setVehicleFound] = useState<boolean>(false);
  const vehiclePanelRef = useRef<HTMLDivElement>(null);
  const confirmRideRef = useRef<HTMLDivElement>(null);
  const vehicleFoundRef = useRef<HTMLDivElement>(null);
  const vehicleData = [
    {
      dataType: {
        type: "Uber Go",
        imageUrl:
          "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png",
      },
      time: "2 min away",
      price: "$193.20",
      description: "Affordable compact,Rides",
    },
    {
      dataType: {
        type: "Uber Go",
        imageUrl:
          "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png",
      },
      time: "2 min away",
      price: "$193.20",
      description: "Affordable compact,Rides",
    },
    {
      dataType: {
        type: "Uber Go",
        imageUrl:
          "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png",
      },
      time: "2 min away",
      price: "$193.20",
      description: "Affordable compact,Rides",
    },
  ];
  const panelRef = useRef<HTMLDivElement>(null);
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
  };
  //ANIMATION FOR PANEL
  useGSAP(() => {
    if (isPanelOpen) {
      gsap.to(panelRef.current, {
        height: "60%",
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0",
      });
    }
  }, [isPanelOpen]);
  //ANIMATION FOR VEHICLE PANEL
  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePanel, isPanelOpen]);
  // ANIMATION FOR CONFIRM RIDE
  useGSAP(() => {
    if (confirmRide) {
      gsap.to(confirmRideRef.current, {
        transform: "translateY(0)",
        duration: 1.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(confirmRideRef.current, {
        transform: "translateY(100%)",
        duration: 1.5,
        ease: "power3.in",
      });
    }
  }, [confirmRide]);
  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)",
        duration: 1.5,
        ease: "power1.in",
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100)",
        duration: 1.5,
        ease: "power3.in",
      });
    }
  });
  console.log(vehicleFound);

  return (
    <div className="relative overflow-hidden">
      <img
        className="w-20 absolute left-3 top-2  "
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/800px-Uber_logo_2018.svg.png"
        alt="logo"
      />
      <div className="h-screen w-screen ">
        <img
          className=" w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="absolute h-screen flex flex-col justify-end top-0">
        <div className="h-[25%]  bg-white p-3 rounded-t-2xl relative">
          <h4
            onClick={() => setIsPanelOpen(false)}
            className={`absolute text-3xl right-48 top-1 ${
              !isPanelOpen ? "hidden" : ""
            } `}
          >
            {" "}
            <i className="ri-arrow-down-wide-fill"></i>
          </h4>
          <h4 className="text-2xl font-bold p-4"> Find a trip </h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            {" "}
            <div className="line absolute h-16 w-1 bg-gray-800 rounded-full top-[44%] left-7 "></div>
            {["destination", "picUpLocation"].map((_, index) => (
              <input
                key={index}
                onClick={() => {
                  setIsPanelOpen(true);
                }}
                value={index === 0 ? destination : picUpLocation}
                onChange={(e) =>
                  index === 0
                    ? setDestination(e.target.value)
                    : setPicUpLocation(e.target.value)
                }
                // className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full'
                className="bg-slate-200 rounded-xl px-12 py-3 w-full m-1"
                type="text"
                placeholder={
                  index === 0 ? "Add a destination" : "Add a pick-up location"
                }
              />
            ))}
          </form>
        </div>

        <div ref={panelRef} className="h-[75%] bg-white ">
          <LocationPanel
            setIsVehiclePanel={setVehiclePanel}
            setIsPanelOpen={setIsPanelOpen}
          />
        </div>
      </div>

      <VehicleComponent
        vehiclePanelRef={vehiclePanelRef}
        setVehiclePanel={setVehiclePanel}
        vehicleData={vehicleData}
        setConfirmRide={setConfirmRide}
      />
      <ConfirmedRide
        confirmRideRef={confirmRideRef}
        setConfirmRide={setConfirmRide}
        vehicleData={vehicleData}
        setVehicleFound={setVehicleFound}
      />
      <LookingForDriver
        vehicleFoundRef={vehicleFoundRef}
        setVehicleFound={setVehicleFound}
      />
    </div>
  );
};
export default Home;

// function VehicleComponent.jsx({vehiclePanelRef, setVehiclePanel, data, index}) {
//   return (<div ref={vehiclePanelRef} className="fixed z-10 bottom-0 rounded-xl w-full translate-y-full p-2 py-8 bg-white">
//     <h5 className="text-3xl font-light text-slate-800 absolute text-center top-0  right-1 w-full" onClick={() => setVehiclePanel(false)}>
//       {" "}
//       <i className="ri-arrow-down-wide-fill"></i>
//     </h5>
//     <h3 className="text-2xl font-bold my-5 pl-4"> Choose a Vehicle</h3>
//     {vehicleData.map((data, index) => <div key={index} className="flex justify-start items-start gap-2 border active:border-slate-950 border-slate-400 p-2 rounded-xl my-1">
//         {" "}
//         <img className="h-16" src={data.dataType.imageUrl} alt="data" />
//         <div className="w-1/2">
//           <h4 className="font-bold text-xl inline-flex justify-between items-center">
//             {data.dataType.type}{" "}
//             <span className="text-gray-500 text-sm">
//               <i className="ri-user-fill px-2"> 4</i>
//             </span>
//           </h4>
//           <h5 className="inline-flex items-end font-medium">
//             {data.time} <span className="pl-2 text-sm">15:24</span>
//           </h5>
//           <h3 className="font-medium text-gray-600">{data.description} </h3>
//         </div>
//         <h2 className="text-2xl font-semibold">{data.price}</h2>
//       </div>)}
//   </div>);
// }
