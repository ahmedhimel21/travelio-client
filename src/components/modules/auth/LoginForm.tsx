"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import React from "react";
import { Link } from "@nextui-org/link";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

import SocialLogin from "./SocialLogin";

const LoginForm = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="w-full md:w-1/2 p-6 lg:p-8 bg-black/50 rounded-b-lg md:rounded-r-lg md:rounded-bl-none">
      <h2 className="text-2xl font-bold text-white mb-6 text-center md:text-left">
        Sign In
      </h2>
      <form className="space-y-6">
        <div>
          <label className="block mb-1 text-sm text-gray-300" htmlFor="email">
            Email
          </label>
          <Input
            fullWidth
            aria-label="email"
            className="w-full md:max-w-xs text-white placeholder-white border-white"
            id="email"
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
            id="password"
            placeholder="Enter your password"
            size="lg"
            style={{ color: "white" }}
            type={isVisible ? "text" : "password"}
            variant="bordered"
          />
        </div>
        <Button
          className="w-[325px] bg-red-500 hover:bg-red-600 text-white py-3"
          size="lg"
          type="submit"
        >
          Sign In
        </Button>
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
          Do not have an account?{" "}
          <Link className="text-red-400 hover:underline" href="/register">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
