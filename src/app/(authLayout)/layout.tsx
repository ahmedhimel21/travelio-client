import { Navbar } from "@/src/components/shared/navbar";
import React from "react";

const authLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      {/* @ts-ignore */}
      <Navbar />
      <main className="container mx-auto max-w-7xl  px-6 flex-grow">
        {children}
      </main>
    </div>
  );
};

export default authLayout;
