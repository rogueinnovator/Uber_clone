import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { LoaderCircle } from "lucide-react";
const UserProtectedWrapper = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { user, setUser } = useUserContext();
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState<boolean>(true);
  const fetchUser = async (token: string) => {
    await fetch(`${BASE_URL}/user/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ["Authorization"]: `Bearer ${token}`,
      },
    })
      .then(async (response) => {
        if (response.ok) {
          const data = await response.json();
          setUser(data?.user);
          navigate("/home");
        } else {
          localStorage.removeItem("token");
          throw new Error("Unauthorized");
        }
      })
      .catch((err) => {
        console.error(err);
        localStorage.removeItem("token");
        navigate("/user-login");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    if (!token) {
      navigate("/user-login");
    } else {
      fetchUser(token);
    }
  }, [token]);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoaderCircle className="animate-spin h-16 w-16" />
      </div>
    );
  }
  return <>{children}</>;
};
export default UserProtectedWrapper;
