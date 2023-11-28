import Link from "next/link";
import React from "react";

type PostItemProps = {
  id: string;
  title: string;
  content: string;
  published: boolean;
};

const PostsListItem = ({ id, title, content, published }: PostItemProps) => {
  return (
    <div className="flex items-center gap-2 my-3">
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <div>{published ? "Published" : "Not Published"}</div>
      </div>
      <div>
        <Link
          href={`/view/${id}`}
          className="border border-zinc-900 text-zinc-900 px-2 py-1 text-center"
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default PostsListItem;
