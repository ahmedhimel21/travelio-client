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
