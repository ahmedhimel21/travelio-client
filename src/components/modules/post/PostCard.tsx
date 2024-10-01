import { Card, Divider } from "@nextui-org/react";
import { FaArrowDown, FaArrowUp, FaComment } from "react-icons/fa6";

const PostCard = () => {
  return (
    <div>
      <Card
        key={"index"}
        className="p-6 mb-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
      >
        {/* Post Title and Date */}
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {"post.title"}
          </h3>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            {"post.date"}
          </p>
        </div>

        {/* Post Image (if available) */}
        {true && (
          <div className="my-4">
            <img
              alt={"post.title"}
              className="w-full h-auto rounded-lg"
              src={"post.image"}
            />
          </div>
        )}

        {/* Post Content */}
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          {"post.content"}
        </p>

        <Divider className="my-4 dark:bg-gray-700" />

        {/* Post Interactions */}
        <div className="flex items-center justify-between text-gray-600 dark:text-gray-400">
          <div className="flex items-center space-x-2">
            <FaArrowUp className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400" />
            <span>{"post.upvotes"}</span>
            <FaArrowDown className="cursor-pointer hover:text-red-600 dark:hover:text-red-400" />
          </div>
          <div>
            <FaComment className="cursor-pointer hover:text-gray-800 dark:hover:text-gray-200" />
            <span className="ml-1">{"post.comments"} Comments</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PostCard;
