import React from "react";

import style from "./style.module.css";

import LoginForm from "@/src/components/modules/auth/LoginForm";
import AuthDescription from "@/src/components/modules/auth/AuthDescription";

const LoginPage = () => {
  return (
    <div
      className={`min-h-screen flex items-center justify-center ${style.container}`}
    >
      <div className="transparent bg-white/10  rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-4xl">
        {/* Left Side (Text Section) */}
        <AuthDescription />
        {/* Right Side (Login Form) */}
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
