import React from "react";
import { useQuery } from "react-query";
import API from "../../../api/api";
import Card from "../../shared/Card";
import PostAuthor from "./PostAuthor";
import PostComments from "./PostComments";

type PostProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Post({ body, title, id }: PostProps) {
  //   const { isLoading, data, isError } = useQuery(`photo-${id}`, API.getPhoto);
  const [isOpen, setIsOpen] = React.useState(false);

  const {
    isLoading,
    data: comments,
    isError,
  } = useQuery(`comment-${id}`, () => API.getComments(id));

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Card>
      <>
        <PostAuthor
          title="teste"
          location="teste2"
          imgSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
        <a href={`/post/${id}`}>
          <img
            src="https://images.unsplash.com/photo-1640209872074-dd584b38f2b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="image"
            className="w-full rounded"
          />

          <div className="pl-2 pb-2 pt-2 text-left">
            <h2 className="font-medium">{title}</h2>
            <PostComments body={body} />
          </div>
        </a>

        <div>
          <button
            onClick={() => handleClick()}
            className="p-2 ml-2 mb-2 text-gray font-semibold rounded hover:bg-gray-100 focus:outline-none"
          >
            View Comments
          </button>

          {isOpen
            ? comments?.map((comment) => (
                <p className="pl-2 pb-2 transition ease-in-out">
                  <em className="pr-2 font-medium">{comment.id}</em>
                  {comment.body}
                </p>
              ))
            : null}
        </div>
      </>
    </Card>
  );
}
