import { cookies } from "next/headers";

import PostCreation from "@/src/components/modules/post/PostCreation";
import { getUser } from "@/src/helpers/getUserInfo";
import NewsFeedPostCard from "@/src/components/modules/post/NewsFeedPostCard";
import { getAllPost } from "@/src/actions/post/post.action";

export default async function Home() {
  const token = cookies().get("accessToken");
  const user = await getUser(token as { value: string });

  const posts: any = await getAllPost();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <PostCreation user={user} />
      {posts &&
        posts?.data?.map((post: any) => (
          <NewsFeedPostCard key={post?._id} post={post} user={user} />
        ))}
    </section>
  );
}
