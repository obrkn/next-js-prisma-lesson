import React from "react";
import prisma from "@/db";
import Link from "next/link";

const page = async ({ params }: { params: { id: string } }) => {
  const post = await prisma.post.findUnique({ where: { id: params.id } });

  return (
    <>
      <div>
        <h1>{post?.title}</h1>
        <p>{post?.content}</p>
      </div>
      <Link
        href=".."
        className="border border-zinc-900 text-zinc-900 px-2 py-1 text-center"
      >
        Go back
      </Link>
    </>
  );
};

export default page;
