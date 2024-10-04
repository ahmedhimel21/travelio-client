"use client";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

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

      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setTotalPages(fetchedTotalPages);

      // If the current page is the last one, stop fetching more
      if (page >= fetchedTotalPages) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
      setHasMore(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  // Function to load more posts when scrolling
  const loadMorePosts = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <InfiniteScroll
      dataLength={posts.length} // Number of posts loaded so far
      endMessage={<p>No more posts to show.</p>}
      hasMore={hasMore} // Whether more posts are available
      loader={<h4>Loading more posts...</h4>}
      next={loadMorePosts} // Function to fetch the next page of posts
    >
      {posts.map((post: any) => (
        <NewsFeedPostCard key={post._id} post={post} user={user} />
      ))}
    </InfiniteScroll>
  );
};

export default NewsFeed;
