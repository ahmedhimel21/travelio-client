"use server";

import nexiosInstance from "@/src/config/nexios.config";

export const getUserByEmail = async (email: string): Promise<any> => {
  try {
    const response = await nexiosInstance.get(`/users/${email}`);

    return response;
  } catch (err) {
    console.log(err);
  }
};
