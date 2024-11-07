"use client";
import React, { useState } from "react";
import DropDownProfile from "./DropDownProfile";
import { followUser, unfollowUser } from "@/src/actions/user/user.action";

const RightSidebar = ({ user, suggestion }: { user: any; suggestion: any }) => {
  const [suggestedUsers, setSuggestedUsers] = useState(suggestion?.data || []);

  // Track follow statuses locally to handle UI updates without removing from the list
  const [followStatuses, setFollowStatuses] = useState(
    suggestion?.data?.reduce((acc: any, suggestedUser: any) => {
      acc[suggestedUser._id] = user?.data?.following.includes(
        suggestedUser._id
      );
      return acc;
    }, {})
  );

  const handleFollow = async (userId: string) => {
    const isFollowing = followStatuses[userId];

    try {
      if (isFollowing) {
        // Unfollow the user if already following
        await unfollowUser(userId);
        setFollowStatuses((prevStatuses: any) => ({
          ...prevStatuses,
          [userId]: false,
        }));
      } else {
        // Follow the user if not already following
        await followUser(userId);
        setFollowStatuses((prevStatuses: any) => ({
          ...prevStatuses,
          [userId]: true,
        }));
      }
    } catch (error) {
      console.error("Error updating follow status", error);
    }
  };

  return (
    <>
      <aside className="hidden lg:flex lg:flex-col lg:w-1/5 xl:w-1/4 p-4 space-y-6 border-l border-gray-200 fixed h-full top-0 right-0">
        <div className="space-y-4 mt-6">
          {user && <DropDownProfile user={user || ""} />}
          <div>
            <div className="p-4 bg-white rounded shadow-md h-screen">
              <h2 className="text-lg font-semibold mb-4">
                People You May Know
              </h2>
              <div className="space-y-3">
                {suggestedUsers?.map((user: any) => (
                  <div key={user._id} className="flex items-center space-x-3">
                    <img
                      src={user?.img}
                      alt={user?.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <a
                        href={`/profile/${user?.email}`}
                        className="text-sm font-medium hover:underline"
                      >
                        {user.name}
                      </a>
                      <br />
                      <button
                        className={`text-xs ${
                          followStatuses[user?._id]
                            ? "text-gray-500"
                            : "text-blue-500"
                        } hover:underline`}
                        onClick={() => handleFollow(user?._id)}
                      >
                        {followStatuses[user?._id] ? "Following" : "Follow"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default RightSidebar;
