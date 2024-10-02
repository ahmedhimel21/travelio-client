"use client";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Divider } from "@nextui-org/react";
import { FaLocationArrow, FaCalendar } from "react-icons/fa6";
import { GoVerified } from "react-icons/go";
import toast from "react-hot-toast";

import PostCard from "../post/PostCard";

import UpdateUserProfile from "./UpdateUserProfile";

import { verifyProfile } from "@/src/actions/profile/profile.action";

const UserProfile = async ({ user, posts }: { user: any; posts: any }) => {
  const dateStr = user?.data?.createdAt;
  const date = new Date(dateStr);

  // Extract month and year
  const options = { year: "numeric", month: "long" };
  const formattedDate = date.toLocaleDateString("en-US", options as any);

  const handleVerifyProfile = async () => {
    const verifyData = {
      _id: user?.data?._id,
      name: user?.data?.name,
      email: user?.data?.email,
      amount: 2000,
    };
    const data: any = await verifyProfile(verifyData);

    if (data?.data?.result) {
      toast.success("Please make your payment");
      window.open(data?.data?.payment_url, "_blank");
      window.location.href = "/";
    }
  };

  return (
    <div className=" text-white p-6 min-h-screen flex justify-center">
      <Card className="p-6 max-w-3xl w-full  rounded-lg">
        <div className="relative">
          {/* Profile Picture */}
          <Avatar
            className="absolute -bottom-12 left-6 border-4 border-black rounded-full"
            size="lg"
            src={user?.data?.img} // Replace with actual profile image URL
          />
        </div>

        <div className="pt-14 pl-6">
          {/* User Info */}
          <div>
            <h2 className="text-xl font-semibold">
              @{user?.data?.name}
              <span className="ml-3">
                {user && user?.data?.verified ? (
                  <Button disabled color="primary" size="md" variant="bordered">
                    <GoVerified color="primary" /> Verified
                  </Button>
                ) : (
                  <Button
                    color="primary"
                    size="md"
                    variant="bordered"
                    onClick={handleVerifyProfile}
                  >
                    <GoVerified color="primary" /> Get Verified
                  </Button>
                )}
              </span>
            </h2>
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
            <UpdateUserProfile user={user} />
          </div>
        </div>
        <Divider className="mt-8" />
        <div className="mt-8">
          {posts &&
            posts?.data?.map((post: any) => (
              <PostCard key={post?._id} post={post} />
            ))}
        </div>
      </Card>
    </div>
  );
};

export default UserProfile;
