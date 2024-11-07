"use server";
import { getUser } from "@/src/helpers/getUserInfo";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { FaPaperPlane, FaPeopleGroup } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import { MdDashboardCustomize, MdOutlineContactPhone } from "react-icons/md";

const LeftSidebar = async () => {
  // get access token from cookies
  const accessToken: any = cookies().get("accessToken");
  //get user
  const user = await getUser(accessToken);
  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-1/5 xl:w-1/4 p-4 space-y-6 border-r border-gray-200 fixed h-full top-0 left-0">
      <div className="space-y-8 flex flex-col justify-center items-start mx-auto mt-6">
        {/* Navigation Links */}
        <Link className="flex items-center gap-3 text-xl font-bold" href="/">
          <FaPaperPlane />
          <p>Travelio</p>
        </Link>
        <Link className="flex items-center gap-3 text-xl font-bold" href="/">
          <FaHome />
          <p>Home</p>
        </Link>
        <Link
          className="flex items-center gap-3 text-xl font-bold"
          href="/aboutUs"
        >
          <FaPeopleGroup />
          <p>About Us</p>
        </Link>
        <Link
          className="flex items-center gap-3 text-xl font-bold"
          href="/contactUs"
        >
          <MdOutlineContactPhone />
          <p>Contact Us</p>
        </Link>
        <Link
          className="flex items-center gap-3 text-xl font-bold"
          href="/profile"
        >
          <ImProfile />
          <p>Profile</p>
        </Link>
        {user?.data?.role === "admin" ? (
          <Link
            className="flex items-center gap-3 text-xl font-bold"
            href="/admin-dashboard"
          >
            <MdDashboardCustomize />
            <p>Dashboard</p>
          </Link>
        ) : (
          <Link
            className="flex items-center gap-3 text-xl font-bold"
            href="/dashboard"
          >
            <MdDashboardCustomize />
            <p>Dashboard</p>
          </Link>
        )}
      </div>
    </aside>
  );
};

export default LeftSidebar;
