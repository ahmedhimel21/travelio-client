import { getUser } from "@/src/helpers/getUserInfo";
import { cookies } from "next/headers";
import LeftSidebar from "@/src/components/shared/LeftSidebar";
import RightSidebar from "@/src/components/shared/RightSidebar";
import { Navbar } from "@/src/components/shared/navbar";
import { suggestionUser } from "@/src/actions/user/user.action";

const commonLayout = async ({ children }: { children: React.ReactNode }) => {
  // get access token from cookies
  const accessToken: any = cookies().get("accessToken");
  //get user
  const user = await getUser(accessToken);

  const suggestion: any = await suggestionUser(user?.data?._id);
  return (
    <div>
      <div className="lg:hidden">
        <Navbar user={user} />
      </div>
      <div className="flex h-screen">
        {/* Left Sidebar */}
        <LeftSidebar user={user} />
        {/* Main Content Feed */}
        <main className="flex-1 p-4 max-w-3xl mx-auto lg:ml-[20%] xl:ml-[25%] lg:mr-[25%]">
          <div>{children}</div>
        </main>

        {/* Right Sidebar */}
        <RightSidebar user={user} suggestion={suggestion} />
      </div>
    </div>
  );
};

export default commonLayout;
