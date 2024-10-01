import { cookies } from "next/headers";

import UserProfile from "@/src/components/modules/profile/UserProfile";
import { getUser } from "@/src/helpers/getUserInfo";

const ProfilePage = async () => {
  const token = cookies().get("accessToken");
  const user = await getUser(token as { value: string });

  return (
    <div>
      <UserProfile user={user} />
    </div>
  );
};

export default ProfilePage;
