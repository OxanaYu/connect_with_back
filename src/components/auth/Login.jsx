import React, { useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";

const Login = () => {
  const { handleLogin, error } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSave = () => {
    if (!email.trim() || !password.trim()) {
      alert("Fill all fields");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      handleLogin(formData, email);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSave}>Login</button>
    </div>
  );
};

export default Login;
