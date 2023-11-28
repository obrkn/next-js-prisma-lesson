import React from "react";
import PostsList from "./components/PostsList";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Posts - Homepage",
  description: "This is the posts homepage",
};

const page = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <h1>All Posts</h1>
        <Link
          href="/add"
          className="border border-zinc-900 text-zinc-900 px-2 py-1 text-center"
        >
          Add new
        </Link>
      </div>
      <PostsList />
    </div>
  );
};

export default page;
