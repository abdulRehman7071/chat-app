"use client";

import { useState } from "react";

const PasswordInput = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassWord = (e) => {
    e.preventDefault();

    setShowPassword(!showPassword);
  };

  return (
    <div>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleShowPassWord}>
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
};

export default PasswordInput;
