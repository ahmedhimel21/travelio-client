import React from "react";
import { Suspense } from "react";
import LoginPage from "@/src/components/modules/auth/LoginPage";

const Login = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LoginPage />
      </Suspense>
    </>
  );
};

export default Login;
