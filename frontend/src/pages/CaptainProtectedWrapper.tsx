import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCaptainContext } from "../context/CaptainContext";
import { LoaderCircle } from "lucide-react";

const CaptainProtectedWrapper = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { setCaptain, captain } = useCaptainContext();
  const token: string | null = localStorage.getItem("token");
  const [loading, setLoading] = useState<boolean>(true); 
  const fetchCaptain = async (token: string | null) => {
    try {
      const response = await fetch(`${BASE_URL}/captain/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setCaptain(data?.captain);
        navigate("/captain-home");
      } else {
        throw new Error("Unauthorized");
      }
    } catch (err) {
      console.error(err);
      localStorage.removeItem("token");
      navigate("/captain-login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    } else {
      fetchCaptain(token);
    }
  }, [token, navigate]);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoaderCircle className="animate-spin h-16 w-16" />
      </div>
    );
  }

  return <>{children}</>;
};

export default CaptainProtectedWrapper;
