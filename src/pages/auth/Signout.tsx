import React, { useEffect, useRef } from "react";
import { Navigate } from "react-router-dom";

const Signout: React.FC = () => {
  const hasAlerted = useRef(false);

  useEffect(() => {
    if (hasAlerted.current) return;
    localStorage.removeItem(process.env.SIGNIN_CHECK_KEY || "");
    alert("로그아웃 되었습니다.");
    hasAlerted.current = true;
  }, []);

  return <Navigate to="/" />;
};

export default Signout;
