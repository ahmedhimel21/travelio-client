import { Avatar, Card, Divider } from "@nextui-org/react";
import { FaArrowDown, FaArrowUp, FaComment } from "react-icons/fa6";

const PostCard = () => {
  return (
    <div>
      <Card
        key={"index"}
        className="p-6 mb-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
      >
        <div className="mb-3 flex items-center gap-3">
          {/* Profile Picture */}
          <Avatar
            className=" border-4 border-black rounded-full"
            size="lg"
            src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100270.jpg" // Replace with actual profile image URL
          />
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            Ahmed Himel
          </h3>
        </div>
        {/* Post Title and Date */}
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {"Exploring the Mountains of Nepal"}
          </h3>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            {"Oct 1, 2024"}
          </p>
        </div>

        {/* Post Image (if available) */}
        {true && (
          <div className="my-4">
            <img
              alt={"post.title"}
              className="w-full h-auto rounded-lg"
              src="https://img.freepik.com/free-photo/beautiful-scenery-summit-mount-everest-covered-with-snow-white-clouds_181624-21317.jpg"
            />
          </div>
        )}

        {/* Post Content */}
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          {
            "Discover the beauty of the Himalayan mountains and the trekking adventures that await. In this guide, I share my experience hiking through Nepal’s most stunning landscapes, including tips on gear, routes, and hidden gems."
          }
        </p>

        <Divider className="my-4 dark:bg-gray-700" />

        {/* Post Interactions */}
        <div className="flex items-center justify-between text-gray-600 dark:text-gray-400">
          <div className="flex items-center space-x-2">
            <FaArrowUp className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400" />
            <span>{"120"}</span>
            <FaArrowDown className="cursor-pointer hover:text-red-600 dark:hover:text-red-400" />
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

export default PostCard;
