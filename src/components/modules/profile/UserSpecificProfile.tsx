"use client";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Divider } from "@nextui-org/react";
import { FaLocationArrow, FaCalendar } from "react-icons/fa6";

import NewsFeedPostCard from "../post/NewsFeedPostCard";
import { useState } from "react";
import { followUser, unfollowUser } from "@/src/actions/user/user.action";
import { RiUserFollowFill } from "react-icons/ri";

const UserSpecificProfile = ({
  user,
  posts,
  currentUser,
}: {
  user: any;
  posts: any;
  currentUser: any;
}) => {
  const [isFollowing, setIsFollowing] = useState(
    currentUser?.data?.following.includes(user?.data?._id)
  );
  const [followerCount, setFollowerCount] = useState(
    user?.data?.followers.length
  );

  const dateStr = user?.data?.createdAt;
  const date = new Date(dateStr);

  // Extract month and year
  const options = { year: "numeric", month: "long" };
  const formattedDate = date.toLocaleDateString("en-US", options as any);

  // Handle follow/unfollow functionality
  const handleFollow = async () => {
    try {
      if (isFollowing) {
        await unfollowUser(user?.data?._id);
        setIsFollowing(false);
        setFollowerCount(followerCount - 1); // Update follower count
      } else {
        await followUser(user?.data?._id);
        setIsFollowing(true);
        setFollowerCount(followerCount + 1); // Update follower count
      }
    } catch (error) {
      console.error("Error updating follow status", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className=" text-white w-full mt-5">
        <Card className="p-6 rounded-lg" fullWidth={true}>
          <div className="relative">
            {/* Profile Picture */}
            <Avatar
              className="absolute -bottom-12 left-6 border-4 border-black rounded-full"
              size="lg"
              src={user?.data?.img}
            />
          </div>

          <div className="pt-14 pl-6">
            {/* User Info */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">@{user?.data?.name}</h2>
              {/* Follow/Unfollow Button */}
              {currentUser?.data?._id !== user?.data?._id && (
                <Button
                  color="primary"
                  size="md"
                  variant="bordered"
                  onClick={handleFollow}
                >
                  <RiUserFollowFill color="primary" />{" "}
                  {isFollowing ? "Following" : "Follow"}
                </Button>
              )}
            </div>

            {/* Location and Joined Date */}
            <div className="flex items-center space-x-4 mt-4 text-gray-400">
              <div className="flex items-center space-x-1">
                <FaLocationArrow />
                <span>Jessore, Bangladesh</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaCalendar />
                <span>Joined {formattedDate}</span>
              </div>
            </div>

            {/* Follow and Follower Stats */}
            <div className="flex space-x-8 mt-4 justify-between items-center">
              <div className="flex gap-8">
                <p className="font-semibold">
                  {user?.data?.following.length}{" "}
                  <span className="text-gray-400">Following</span>
                </p>
                <p className="font-semibold">
                  {user?.data?.followers.length}{" "}
                  <span className="text-gray-400">Follower</span>
                </p>
              </div>
            </div>
          </div>
          <Divider className="mt-8" />
          <div className="mt-8">
            {posts &&
              posts?.data?.map((post: any, index: number) => (
                <NewsFeedPostCard key={index} post={post} user={currentUser} />
              ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UserSpecificProfile;
