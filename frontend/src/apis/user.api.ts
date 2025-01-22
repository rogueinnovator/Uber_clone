const BASE_URL = import.meta.env.VITE_BASE_URL;
import { SignInUser } from "../pages/UserLogin";
import { SignUpUser } from "../pages/UserSignup";
const POSTApiRequest = async (
  method: string,
  endPoint: string,
  data: SignInUser | SignUpUser,
  token?: string | null
) => {
  try {
    console.log(BASE_URL, endPoint, method, data, "this is token", token);
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    const response = await fetch(`${BASE_URL}${endPoint}`, {
      method,
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
    throw new Error("Network Error ");
  }
};
const apiRequestGet = async (
  method: string,
  endpoint: string,
  token?: string
) => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers,
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "something went wrong");
  }
};

const ENDPOINTS = {
  SIGNUP: "/user/register",
  SIGNIN: "/user/login",
};
export const signIn = async (data: SignInUser) => {
  return await POSTApiRequest("POST", ENDPOINTS.SIGNIN, data);
};
export const signUp = async (data: SignUpUser) => {
  return await POSTApiRequest("POST", ENDPOINTS.SIGNUP, data);
};
