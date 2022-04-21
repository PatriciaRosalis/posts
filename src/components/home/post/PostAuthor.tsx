import React from "react";

type PostAuthorProps = {
  imgSrc: string;
  title: string;
  location: string;
};

export default function PostAuthor({
  title,
  imgSrc,
  location,
}: PostAuthorProps) {
  return (
    <div className="flex mb-2">
      <div>
        <img
          src={imgSrc}
          className="w-12 h-12 rounded-full
          object-cover
"
          alt=""
        />
      </div>
      <div className="ml-3">
        <h3 className="font-bold">{title}</h3>
        <p className="text-gray-500">{location}</p>
      </div>
    </div>
  );
}
