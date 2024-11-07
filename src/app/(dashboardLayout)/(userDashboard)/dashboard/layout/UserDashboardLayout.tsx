"use client";
import { NavbarWrapper } from "@/src/components/modules/dashboard/userDashboard/UserNavbar";
import { SidebarWrapper } from "@/src/components/modules/dashboard/userDashboard/UserSidebar";

const UserLayout = ({
  children,
  user,
}: {
  children: React.ReactNode;
  user: any;
}) => {
  return (
    <div className="flex">
      <SidebarWrapper></SidebarWrapper>
      <NavbarWrapper user={user}>{children}</NavbarWrapper>
    </div>
  );
};

export default UserLayout;
