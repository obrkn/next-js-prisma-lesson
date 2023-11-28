import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import prisma from "@/db";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Add New Post",
  description: "This is the new post page.",
};

const addPost = async (formData: FormData) => {
  "use server";

  const title = formData.get("title")?.valueOf();
  const content = formData.get("content")?.valueOf();

  if (typeof title !== "string" || title.length === 0) {
    throw new Error();
  }
  if (typeof content !== "string") {
    throw new Error();
  }

  await prisma.post.create({
    data: {
      title: title,
      content: content,
      published: true,
    },
  });

  redirect("/");
};

const page = () => {
  return (
    <div>
      <h1>Add New Post</h1>
      <form action={addPost} className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          placeholder="Enter post title..."
          className="border border-zinc-900 bg-transparent px-2 py-1 outline-none"
        />
        <textarea
          name="content"
          id=""
          placeholder="Enter content..."
          className="border border-zinc-900 bg-transparent px-2 py-1 outline-none"
        ></textarea>
        <div className="flex gap-1 my-3">
          <Link
            href=".."
            className="border border-zinc-900 text-zinc-900 px-2 py-1 text-center"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-zinc-900 text-zinc-900 px-2 py-1 text-center"
          >
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
