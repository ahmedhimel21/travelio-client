"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "@nextui-org/link";
import { createRef, useEffect, useState } from "react";
import { useFormState } from "react-dom";
import toast, { Toaster } from "react-hot-toast";

import SocialLogin from "./SocialLogin";

import { register } from "@/src/actions/auth/auth.actions";

const RegisterForm = () => {
  // conditionally show or hide password
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  // handle form submit
  const [state, formAction] = useFormState(register, null);

  const ref = createRef<HTMLFormElement>();

  //dispatch(createCar(oldData, newFormData));
  useEffect(() => {
    if (state && state.success) {
      toast.success(state.message);
      ref.current!.reset();
      window.location.href = "/login";
    }

    if (state && !state.success) {
      toast.error(state.message);
    }
  }, [state, ref]);

  return (
    <div className="w-full md:w-1/2 p-6 lg:p-8 bg-black/50 rounded-b-lg md:rounded-r-lg md:rounded-bl-none">
      <h2 className="text-2xl font-bold text-white mb-6 text-center md:text-left">
        Sign Up
      </h2>
      <form ref={ref} action={formAction} className="space-y-6">
        <div>
          <label className="block mb-1 text-sm text-gray-300" htmlFor="name">
            Name
          </label>
          <Input
            fullWidth
            required
            aria-label="name"
            className="w-full md:max-w-xs text-white placeholder-white border-white"
            name="name"
            placeholder="Enter your name"
            size="lg"
            style={{ color: "white" }}
            type="text"
            variant="bordered"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm text-gray-300" htmlFor="email">
            Email
          </label>
          <Input
            fullWidth
            required
            aria-label="email"
            className="w-full md:max-w-xs text-white placeholder-white border-white"
            name="email"
            placeholder="Enter your email"
            size="lg"
            style={{ color: "white" }}
            type="email"
            variant="bordered"
          />
        </div>
        <div>
          <label
            className="block mb-1 text-sm text-gray-300"
            htmlFor="password"
          >
            Password
          </label>
          <Input
            fullWidth
            required
            className="w-full md:max-w-xs text-white placeholder-white border-white"
            endContent={
              <button
                aria-label="toggle password visibility"
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <FaEye className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            name="password"
            placeholder="Enter your password"
            size="lg"
            style={{ color: "white" }}
            type={isVisible ? "text" : "password"}
            variant="bordered"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm text-gray-300" htmlFor="picture">
            Picture
          </label>
          <Input
            fullWidth
            aria-label="picture"
            className="w-full md:max-w-xs text-white placeholder-white border-white"
            name="img"
            placeholder="Enter your email"
            required={true}
            size="lg"
            style={{ color: "white" }}
            type="file"
            variant="bordered"
          />
        </div>
        <Button
          className="w-[325px] bg-red-500 hover:bg-red-600 text-white py-3"
          size="lg"
          type="submit"
        >
          Sign Up
        </Button>
        <Toaster />
      </form>
      <div className="flex items-center justify-center my-4 w-[300px]">
        <hr className="border-gray-400 w-full" />
        <span className="px-4 text-white font-medium">or</span>
        <hr className="border-gray-400 w-full" />
      </div>
      <div className="flex justify-center items-baseline w-[300px]">
        <SocialLogin />
      </div>
      <div className="mt-6 text-center md:text-left flex justify-center items-center w-[300px]">
        <p className="text-gray-300">
          Already have an account?{" "}
          <Link className="text-red-400 hover:underline" href="/login">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
