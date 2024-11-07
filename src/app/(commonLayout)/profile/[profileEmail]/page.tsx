import { getUserPost } from "@/src/actions/post/post.action";
import { getUserByEmail } from "@/src/actions/user/user.action";
import UserSpecificProfile from "@/src/components/modules/profile/UserSpecificProfile";
import { getUser } from "@/src/helpers/getUserInfo";
import { cookies } from "next/headers";
import React from "react";

const UserProfilePage = async ({
  params,
}: {
  params: { profileEmail: string };
}) => {
  const { profileEmail } = params;
  const user = await getUserByEmail(profileEmail);
  const posts = await getUserPost(user?.data?.data?._id);
  const token = cookies().get("accessToken");
  const currentUser = await getUser(token as { value: string });
  return (
    <div>
      <UserSpecificProfile
        posts={posts}
        user={user?.data}
        currentUser={currentUser}
      ></UserSpecificProfile>
    </div>
  );
};

export default UserProfilePage;
