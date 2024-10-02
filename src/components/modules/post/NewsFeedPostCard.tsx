"use client";
import { Avatar, Button, Card, Divider } from "@nextui-org/react";
import { FaArrowDown, FaArrowUp, FaComment } from "react-icons/fa6";
import { RiUserFollowFill } from "react-icons/ri";
import { useEffect, useState } from "react";

import { downVote, upVote } from "@/src/actions/post/post.action";

const NewsFeedPostCard = ({ post, user }: { post: any; user: any }) => {
  const [userVote, setUserVote] = useState(null);
  const dateStr = post?.createdAt;
  const date = new Date(dateStr);

  // Extract month and year
  const options = { year: "numeric", month: "long" };
  const formattedDate = date.toLocaleDateString("en-US", options as any);

  useEffect(() => {
    const existingVote = post.voters.find(
      (voter: any) => voter.user === user?.data?._id
    );

    // console.log(existingVote);
    if (existingVote) {
      setUserVote(existingVote.vote);
    }
  }, [post.voters, user?.data?._id]);

  //handle up vote
  const handleUpVote = async (id: string) => {
    await upVote(id);
  };

  const handleDownVote = async (id: string) => {
    await downVote(id);
  };

  return (
    <div className="w-full max-w-4xl">
      <Card
        key={"index"}
        className="p-6 mb-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 w-full"
      >
        <div className="mb-3 flex justify-between items-center">
          {/* Profile Picture */}
          <div className="flex items-center gap-3">
            <Avatar
              className="border-2 border-black rounded-full"
              size="lg"
              src={post?.author?.img} // Replace with actual profile image URL
            />
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              {post?.author?.name}
            </h3>
          </div>
          <Button disabled color="primary" size="md" variant="bordered">
            <RiUserFollowFill color="primary" /> Follow
          </Button>
        </div>

        {/* Post Title and Date */}
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {post?.title}
          </h3>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            {formattedDate}
          </p>
        </div>

        {/* Post Image (if available) */}
        {post.image && (
          <div className="my-4">
            <img
              alt={post.title}
              className="w-full h-64 object-cover rounded-lg"
              src={post?.image}
            />
          </div>
        )}

        {/* Post Content */}
        <p className="text-gray-700 dark:text-gray-300 mt-2 line-clamp-3">
          {post?.content}
        </p>

        <Divider className="my-4 dark:bg-gray-700" />

        {/* Post Interactions */}
        <div className="flex items-center justify-between text-gray-600 dark:text-gray-400">
          <div className="flex items-center space-x-2">
            <FaArrowUp
              className={`cursor-pointer ${
                userVote === "upvote" ? "text-blue-600" : "hover:text-blue-600"
              }`}
              onClick={() => handleUpVote(post?._id)}
            />
            <span>{post?.upVotes}</span>
            <FaArrowDown
              className={`cursor-pointer ${
                userVote === "downvote" ? "text-red-600" : "hover:text-red-600"
              }`}
              onClick={() => handleDownVote(post?._id)}
            />
          </div>
          <div>
            <FaComment className="cursor-pointer hover:text-gray-800 dark:hover:text-gray-200" />
            <span className="ml-1">{"45"} Comments</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default NewsFeedPostCard;
