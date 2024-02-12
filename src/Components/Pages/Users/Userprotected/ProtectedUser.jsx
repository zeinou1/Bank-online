
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ProtectedUser = ({ children }) => {
  const { connected } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!connected) {
      localStorage.removeItem("user");
      navigate("/");
    }
  }, [connected, navigate]);

  return children;
};

export default ProtectedUser;
