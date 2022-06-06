import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { inAuth, login, setForm, form } = useContext(AuthContext);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({ name: value });
  };

  const handleSubmit = () => {
    login();
  };

  return (
    <div>
      <input
        data-cy="login-email"
        name="email"
        placeholder="email"
        onChange={handleChange}
      />
      <input
        data-cy="login-password"
        name="password"
        placeholder="password"
        onChange={handleChange}
      />
      <button data-cy="login-submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Login;