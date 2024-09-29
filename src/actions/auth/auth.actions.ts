"use server";

import { toast } from "sonner";

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
    console.log(error);
    toast.error("something went wrong!");
  }
};
