import { cookies } from "next/headers";
import AdminLayout from "./layout/adminDashboardLayout";
import { getUser } from "@/src/helpers/getUserInfo";

const AdminDashboardLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const token = cookies().get("accessToken");
  const user = await getUser(token as { value: string });
  return (
    <div>
      <AdminLayout user={user}>{children}</AdminLayout>
    </div>
  );
};

export default AdminDashboardLayout;
