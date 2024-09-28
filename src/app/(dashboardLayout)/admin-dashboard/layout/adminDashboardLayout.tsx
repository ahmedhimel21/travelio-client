"use client"

import { AdminSidebarWrapper } from "@/src/components/modules/dashboard/adminDashboard/AdminSidebar";
import { NavbarWrapper } from "@/src/components/modules/dashboard/userDashboard/UserNavbar";

const AdminLayout = ({children}: {children: React.ReactNode}) => {
    return (
    <div className="flex">
        <AdminSidebarWrapper></AdminSidebarWrapper>
        <NavbarWrapper>
        {children}
        </NavbarWrapper>
    </div>
    );
};

export default AdminLayout;