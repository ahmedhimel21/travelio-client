"use client";
import { Button } from "@nextui-org/button";
import toast, { Toaster } from "react-hot-toast";

const Logout = () => {
  const handleRemoveCookies = () => {
    //remove access token
    document.cookie =
      "accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    // Remove refreshToken
    document.cookie =
      "refreshToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    toast.success("Logout successfully");
    window.location.href = "/";
  };

  return (
    <div>
      <Button color="danger" onClick={handleRemoveCookies}>
        Logout
      </Button>
      <Toaster />
    </div>
  );
};

export default Logout;
