const BASE_URL = import.meta.env.VITE_BASE_URL;
import { CaptainSignIn } from "../pages/CaptainLogin";
import { CaptainSignUp } from "../pages/CaptainSignup";
const POSTApiRequest = async (
  endPoint: string,
  data: CaptainSignUp | CaptainSignIn
) => {
  console.log(data, endPoint);
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  try {
    const response = await fetch(`${BASE_URL}${endPoint}`, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Network Error");
  }
};
const ENDPOINT = {
  SIGNUP: "/captain/register",
  SIGNIN: "/captain/login",
};
export const captainSignUp = async (data: CaptainSignUp) => {
  return await POSTApiRequest(ENDPOINT.SIGNUP, data);
};
export const captainSignIn = async (data: CaptainSignIn) => {
  return await POSTApiRequest(ENDPOINT.SIGNIN, data);
};
