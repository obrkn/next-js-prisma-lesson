import React from "react";
import prisma from "@/db";
import PostsListItem from "./PostsListItem";

const PostsList = async () => {
  const posts = await prisma.post.findMany();
  console.log("Data", posts);

  return (
    <div>
      {posts.map((post) => (
        <PostsListItem key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostsList;
