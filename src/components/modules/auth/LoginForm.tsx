"use client";
import React, { createRef, useEffect } from "react";
import { useFormState } from "react-dom";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

import SocialLogin from "./SocialLogin";

import { login } from "@/src/actions/auth/auth.actions";

const LoginForm = () => {
  // handle form submit
  const [state, formAction] = useFormState(login, null);

  const ref = createRef<HTMLFormElement>();

  //dispatch(createCar(oldData, newFormData));
  useEffect(() => {
    if (state && state.success) {
      toast.success(state.message, { duration: 5000 });
      ref.current!.reset();
      window.location.href = "/";
    }

    if (state && !state.success) {
      toast.error(state.message);
    }
  }, [state, ref]);

  // Demo credentials
  const demoUserCredentials = {
    email: "sabbir@gmail.com",
    password: "default-pass",
  };

  const demoAdminCredentials = {
    email: "web@programming-hero.com",
    password: "default-pass",
  };

  // Function to set demo credentials
  const fillCredentials = (credentials: any) => {
    if (ref.current) {
      ref.current.email.value = credentials.email;
      ref.current.password.value = credentials.password;
    }
  };

  return (
    <form ref={ref} action={formAction}>
      <h1 className="text-3xl font-bold">Sign In</h1>
      <div className="social-icons">
        <SocialLogin />
      </div>
      <span>or use your email password</span>
      {/* Demo User and Admin Buttons */}
      <div className="flex gap-4 my-2">
        <button
          type="button"
          onClick={() => fillCredentials(demoUserCredentials)}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Demo User
        </button>
        <button
          type="button"
          onClick={() => fillCredentials(demoAdminCredentials)}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          Demo Admin
        </button>
      </div>
      <input name="email" placeholder="Email" required={true} type="email" />
      <input
        name="password"
        placeholder="Password"
        required={true}
        type="password"
      />
      <Link className="mr-0" color="primary" href="/forgot-password">
        Forget Password
      </Link>
      <Toaster />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default LoginForm;
