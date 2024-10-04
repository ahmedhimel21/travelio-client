/* eslint-disable no-console */
"use server";

import { revalidateTag } from "next/cache";

import nexiosInstance from "@/src/config/nexios.config";

// create post
export const createPost = async (payload: any) => {
  try {
    const response = await nexiosInstance.post("/post/create", payload);

    revalidateTag("posts");

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// get user specific post
export const getUserPost = async (id: string) => {
  try {
    const response = await nexiosInstance.get(`/post/${id}`, {
      next: {
        tags: ["posts"],
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// get all user post
export const getAllPost = async (page = 1) => {
  const query = new URLSearchParams({ page: String(page), limit: "10" });

  try {
    const response: any = await nexiosInstance.get(
      `/post?${query.toString()}`,
      {
        next: {
          tags: ["posts"],
        },
      }
    );

    return response?.data?.data;
  } catch (error) {
    console.log(error);

    return { posts: [], totalPages: 0 };
  }
};

// upvote
export const upVote = async (id: string) => {
  try {
    const response = await nexiosInstance.post(`/post/upvote/${id}`, {});

    revalidateTag("posts");

    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

// down vote
export const downVote = async (id: string) => {
  try {
    const response = await nexiosInstance.post(`/post/downvote/${id}`, {});

    revalidateTag("posts");

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
