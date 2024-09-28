import { Car, Cog, DollarSign, History, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// import { useSidebarContext } from "@/app/(dashboardLayout)/layout/layout-context";
import { Sidebar } from "../shared/sidebar.styles";
import { SidebarItem } from "../shared/Sidebar-item";
import { SidebarMenu } from "../shared/Sidebar-menu";
import { CollapseItems } from "../shared/collapse-items";
import { useSidebarContext } from "@/src/app/(dashboardLayout)/layout/layout-context";


export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed } = useSidebarContext();

  return (
    <aside className="h-screen z-[20] sticky top-0">
      {collapsed ? <div className={Sidebar.Overlay()} /> : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>
          {" "}
          <Link className="flex" href="/">
            <Cog />
            <p className="font-bold text-inherit px-4">APOLLO GEARS</p>
          </Link>
        </div>

        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Home"
              icon={<Home />}
              isActive={pathname === "/dashboard"}
              href="/dashboard"
            />
            <SidebarMenu title="Main Menu">
              <SidebarItem
                isActive={pathname === "/dashboard/rent-car"}
                title="rent-car"
                icon={<Car />}
                href="/dashboard/rent-car"
              />
              <SidebarItem
                isActive={pathname === "/dashboard/payments"}
                title="Payments"
                icon={<DollarSign />}
              />
              <CollapseItems
                icon={<History />}
                items={["Banks Accounts", "Credit Cards", "Loans"]}
                title="Rent history"
              />
              <SidebarItem
                isActive={pathname === "/customers"}
                title="Customers"
                icon={<Home />}
              />
              <SidebarItem
                isActive={pathname === "/products"}
                title="Products"
                icon={<Home />}
              />
              <SidebarItem
                isActive={pathname === "/reports"}
                title="Reports"
                icon={<Home />}
              />
            </SidebarMenu>

            <SidebarMenu title="Updates">
              <SidebarItem
                isActive={pathname === "/changelog"}
                title="Changelog"
                icon={<Home />}
              />
            </SidebarMenu>
          </div>
        </div>
      </div>
    </aside>
  );
};