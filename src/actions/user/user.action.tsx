"use server";

import { revalidateTag } from "next/cache";

import nexiosInstance from "@/src/config/nexios.config";

export const getUserByEmail = async (email: string): Promise<any> => {
  try {
    const response = await nexiosInstance.get(`/users/${email}`, {
      next: {
        tags: ["users"],
      },
    });

    return response;
  } catch (err) {
    console.log(err);
  }
};

export const followUser = async (userId: string) => {
  try {
    const result = await nexiosInstance.post(`/users/${userId}/follow`, {});

    revalidateTag("posts");
  } catch (error) {
    console.log(error);
  }
};
export const unfollowUser = async (userId: string) => {
  try {
    const result = await nexiosInstance.post(`/users/${userId}/unfollow`, {});

    revalidateTag("posts");
  } catch (error) {
    console.log(error);
  }
};

export const getAllUser = async () => {
  try {
    const users: any = await nexiosInstance.get("/users");

    return users?.data;
  } catch (error) {
    console.log("error =>", error);
  }
};
