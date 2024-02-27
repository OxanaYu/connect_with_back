import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { API } from "../helpers/const";
import { useNavigate } from "react-router-dom";
const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  // ! Register
  const handleRegister = async (formData) => {
    try {
      await axios.post(`${API}/account/register/`, formData);
      navigate("/login");
    } catch (error) {
      setError(Object.values(error.response.data));
    }
  };

  //   ! Login
  const handleLogin = async (formData, email) => {
    try {
      const { data } = await axios.post(`${API}/account/login/`, formData);
      console.log(data);
      localStorage.setItem("tokens", JSON.stringify(data));
      localStorage.setItem("email", email);
      setCurrentUser(email);
    } catch (error) {
      setError(Object.values(error.response.data));
    }
  };

  const values = {
    handleRegister,
    error,
    handleLogin,
    currentUser,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
