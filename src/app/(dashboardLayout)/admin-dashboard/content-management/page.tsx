import React from "react";

import { getTablePostData } from "@/src/actions/post/post.action";
import ContentTable from "@/src/components/modules/dashboard/adminDashboard/contentManagement/ContentTable";

const ContentManagement = async () => {
  const posts = await getTablePostData();

  return (
    <div>
      <ContentTable posts={posts} />
    </div>
  );
};

export default ContentManagement;
