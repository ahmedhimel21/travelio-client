"use client";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "@nextui-org/react";

import NewsFeedPostCard from "./NewsFeedPostCard";

import { getAllPost } from "@/src/actions/post/post.action";
import { IPost } from "@/src/types/post.types";

const NewsFeed = ({ user }: { user: any }) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  // Function to fetch posts based on page number
  const fetchPosts = async () => {
    try {
      const { posts: newPosts, totalPages: fetchedTotalPages } =
        await getAllPost(page);

      // Avoid adding duplicate posts
      const uniquePosts = newPosts.filter(
        (newPost: any) =>
          !posts.some((existingPost) => existingPost._id === newPost._id)
      );

      if (uniquePosts.length > 0) {
        setPosts((prevPosts) => [...prevPosts, ...uniquePosts]);
      }
      setTotalPages(fetchedTotalPages); // Set the total pages

      // Disable loading more if the current page is the last one
      if (page >= fetchedTotalPages) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
      setHasMore(false); // Stop infinite scroll in case of error
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  // Function to load more posts when scrolling
  const loadMorePosts = () => {
    setPage((prevPage) => prevPage + 1); // Increment the page number
  };

  return (
    <div className="w-full max-w-4xl">
      <InfiniteScroll
        dataLength={posts.length} // Number of posts loaded so far
        endMessage={<p className="text-center">No more posts to show.</p>}
        hasMore={hasMore} // Whether more posts are available
        loader={
          <div className="flex justify-center">
            <Spinner />
          </div>
        }
        next={loadMorePosts} // Function to fetch the next page of posts
      >
        {posts.map((post: any, index) => (
          <NewsFeedPostCard key={index} post={post} user={user} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default NewsFeed;
