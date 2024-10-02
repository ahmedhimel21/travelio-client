"use client";
import { createRef, useState } from "react";
import dynamic from "next/dynamic";

import "react-quill/dist/quill.snow.css";
import toast, { Toaster } from "react-hot-toast";

import { uploadImageToIMGBB } from "@/src/helpers/handleImageUpload";
import { categories } from "@/src/constant/postCategories";
import { createPost } from "@/src/actions/post/post.action";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CreatePostForm = ({ onClose, user }: { onClose: any; user: any }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [premium, setIsPremium] = useState(false);

  const [category, setCategory] = useState("");

  const ref = createRef<HTMLFormElement>();

  const handleImageChange = (e: any) => {
    setImage(e.target.files[0]);
  };

  const handlePostSubmit = async (e: any) => {
    e.preventDefault();
    let postData: any = {};

    if (image) {
      const uploadedImage = await uploadImageToIMGBB(image);

      if (uploadedImage) {
        postData.image = uploadedImage;
      }
    }
    if (premium) {
      postData.premium = premium;
    }
    postData.title = e.target.title.value;
    postData.content = content.replace(/<[^>]+>/g, "");
    postData.category = category;
    postData.author = user?.data?._id;

    const creatingPost: any = await createPost(postData);

    if (creatingPost && creatingPost.success) {
      toast.success(creatingPost.message, { duration: 5000 });
      ref.current!.reset();
      onClose();
    }
    if (creatingPost && !creatingPost.success) {
      toast.error(creatingPost.message);
    }
  };

  return (
    <form
      ref={ref}
      className="flex flex-col space-y-4"
      onSubmit={handlePostSubmit}
    >
      <input
        required
        className="border rounded p-2"
        name="title"
        placeholder="Title"
        type="text"
      />
      <ReactQuill
        placeholder="What's on your mind?"
        value={content}
        onChange={setContent}
      />
      <select
        className="border rounded p-2"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.name}>
            {cat.name}
          </option>
        ))}
      </select>
      <input accept="image/*" type="file" onChange={handleImageChange} />
      <div className="flex items-center mb-4">
        <label className="mr-2" htmlFor="premium">
          Mark as Premium
        </label>
        <input
          id="premium"
          name="isPremium"
          type="checkbox"
          onChange={(e) => setIsPremium(e.target.checked)}
        />
      </div>
      <button className="bg-blue-500 text-white p-2 rounded-md" type="submit">
        Post
      </button>
      <Toaster />
    </form>
  );
};

export default CreatePostForm;
