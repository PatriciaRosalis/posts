import React from "react";

type PostsBodyProps = {
  body: string;
};

export default function PostsBody({ body }: PostsBodyProps) {
  return (
    <div className="text-base text-body-color leading-relaxed mb-2">{body}</div>
  );
}
