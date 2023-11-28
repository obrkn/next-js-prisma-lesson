import React from "react";
import prisma from "@/db";
import PostsListItem from "./PostsListItem";
import { revalidatePath } from "next/cache";

const PostsList = async () => {
  const posts = await prisma.post.findMany();
  console.log("Data", posts);

  const onDelete = async (id: string) => {
    "use server";
    await prisma.post.delete({ where: { id } });
    revalidatePath("/");
  };

  const onPublish = async (id: string, published: boolean) => {
    "use server";

    await prisma.post.update({
      where: { id },
      data: { published },
    });
    revalidatePath("/");
  };

  return (
    <div>
      {posts.map((post) => (
        <PostsListItem
          key={post.id}
          {...post}
          onDelete={onDelete}
          onPublish={onPublish}
        />
      ))}
    </div>
  );
};

export default PostsList;
