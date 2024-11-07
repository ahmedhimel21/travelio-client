import { Input, Navbar, NavbarContent } from "@nextui-org/react";
import React from "react";
import { ChevronLeft, Menu, SearchCheck } from "lucide-react";

import { useSidebarContext } from "@/src/app/(dashboardLayout)/layout/layout-context";
import { cookies } from "next/headers";
import DropDownProfile from "@/src/components/shared/DropDownProfile";

interface Props {
  children: React.ReactNode;
  user: any;
}

export const NavbarWrapper = ({ children, user }: Props) => {
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden ">
      <Navbar
        isBordered
        className="w-full"
        classNames={{
          wrapper: "w-full max-w-full",
        }}
      >
        <NavbarContent className="md:hidden">
          {collapsed ? (
            <ChevronLeft onClick={setCollapsed} />
          ) : (
            <Menu onClick={setCollapsed} />
          )}
        </NavbarContent>
        <NavbarContent className="w-full max-md:hidden">
          <DropDownProfile user={user}></DropDownProfile>
        </NavbarContent>
        <NavbarContent
          className="w-fit data-[justify=end]:flex-grow-0"
          justify="end"
        />
      </Navbar>
      {children}
    </div>
  );
};
