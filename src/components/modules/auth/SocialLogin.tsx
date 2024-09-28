"use client";
import { Button } from "@nextui-org/button";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

import { GoogleIcon } from "../../shared/icons";

const SocialLogin = () => {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  return (
    <div>
      <Button
        onClick={() => {
          signIn("google", { callbackUrl: redirect ? redirect : "/" });
        }}
      >
        <GoogleIcon />
      </Button>
    </div>
  );
};

export default SocialLogin;
