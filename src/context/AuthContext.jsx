import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const login = () => {
    setIsAuth(true);
    navigate("/products");
  };

  const logout = () => {
    setIsAuth(false);
    navigate("/login");
  };
  return (
    <AuthContext.Provider value={{ setIsAuth, isAuth, logout, login, setForm ,form}}>
      {children}
    </AuthContext.Provider>
  );
};