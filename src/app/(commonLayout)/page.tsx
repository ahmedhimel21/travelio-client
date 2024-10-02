import { cookies } from "next/headers";

import PostCreation from "@/src/components/modules/post/PostCreation";
import { getUser } from "@/src/helpers/getUserInfo";

export default async function Home() {
  const token = cookies().get("accessToken");
  const user = await getUser(token as { value: string });

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <PostCreation user={user} />
    </section>
  );
}
