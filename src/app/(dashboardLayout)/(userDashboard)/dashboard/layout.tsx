import { cookies } from "next/headers";
import UserLayout from "./layout/UserDashboardLayout";
import { getUser } from "@/src/helpers/getUserInfo";

const UserDashboardLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const token = cookies().get("accessToken");
  const user = await getUser(token as { value: string });
  return (
    <div>
      <UserLayout user={user}>{children}</UserLayout>
    </div>
  );
};

export default UserDashboardLayout;
