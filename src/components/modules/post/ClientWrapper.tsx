"use client";

import { useState } from "react";
import RightSidebar from "@/src/components/shared/RightSidebar";
import LeftSidebar from "@/src/components/shared/LeftSidebar";
import NewsFeed from "./NewsFeed";
import Home from "@/src/app/(commonLayout)/page";

const ClientWrapper = ({ user }: { user: any }) => {
  // Manage states here for filtering and sorting
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("-createdAt");

  // Reset all filters function
  const resetFilters = () => {
    setSearchTerm("");
    setCategory("");
    setSortBy("-createdAt");
  };

  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}

      <LeftSidebar></LeftSidebar>
      {/* Main Content Feed */}
      <main className="flex-1 p-4 max-w-5xl mx-auto lg:ml-[20%] xl:ml-[25%] lg:mr-[25%] "></main>

      {/* Right Sidebar */}
      <RightSidebar></RightSidebar>
    </div>
  );
};

export default ClientWrapper;
