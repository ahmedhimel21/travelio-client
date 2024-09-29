"use server";

import { toast } from "sonner";
import { cookies } from "next/headers";

import nexiosInstance from "@/src/config/nexios.config";
import { uploadImageToIMGBB } from "@/src/helpers/handleImageUpload";

export const register = async (pre: any, formData: any): Promise<any> => {
  try {
    const newFormData = {
      ...Object.fromEntries(formData),
    };
    const image = await uploadImageToIMGBB(newFormData.img);

    if (image) {
      const registerData = {
        name: newFormData?.name,
        email: newFormData?.email,
        password: newFormData?.password,
        img: image,
      };
      const response = await nexiosInstance.post(
        "/auth/register",
        registerData
      );

      return response?.data;
    }
  } catch (error) {
    toast.error("something went wrong!");
  }
};

export const login = async (pre: any, formData: any): Promise<any> => {
  try {
    const newFormData = {
      ...Object.fromEntries(formData),
    };
    const response: any = await nexiosInstance.post("/auth/login", newFormData);

    if (
      response?.data?.data?.accessToken ||
      response?.data?.data?.refreshToken
    ) {
      cookies().set("accessToken", response?.data?.data?.accessToken);
      cookies().set("refreshToken", response?.data?.data?.refreshToken);
    }

    return response?.data;
  } catch (err) {
    console.log(err);
  }
};
