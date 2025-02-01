import type React from "react";
import { useState, useRef, type KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
// interface Props {
//   setConfirmRide: Dispatch<SetStateAction<boolean>>;
// }
const OTP = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [error, setError] = useState<string>("");
  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling && element.value !== "") {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      // Move focus to the previous input field on backspace
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length !== 6) {
      setError("OTP must be 6 digits long");
    } else {
      navigate("/captain-riding");
      setError("");
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Enter OTP
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 flex flex-col items-center jus"
      >
        <div className="flex justify-between  space-x-1">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={data}
              ref={(input) => (inputRefs.current[index] = input)}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-2xl text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 ease-in-out transform hover:scale-105"
            />
          ))}
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-28 py-3 rounded-xl font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          Confirm{" "}
        </button>
      </form>
      <p className="mt-4 text-sm text-center text-red-600">
        {error}{" "}
        {/* <a href="#" className="text-blue-600 hover:underline">
          Resend OTP
        </a> */}
      </p>
    </div>
  );
};
export default OTP;
