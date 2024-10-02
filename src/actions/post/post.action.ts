"use server";

import nexiosInstance from "@/src/config/nexios.config";

export const createPost = async (payload: any) => {
  try {
    const response = await nexiosInstance.post("/post/create", payload);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserPost = async (id: string) => {
  try {
    const response = await nexiosInstance.get(`/post/${id}`);

    // console.log(response);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
