import { CommentsResponse, PostsResponse } from "./types";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const API = {
  getPosts: function (): Promise<PostsResponse[]> {
    return fetch(`${BASE_URL}/posts`).then((res) => res.json());
  },
  getPostDetail: function (id: number): Promise<PostsResponse> {
    return fetch(`${BASE_URL}/posts/${id}`).then((res) => res.json());
  },
  postPost: function (
    title: string,
    body: string,
    moreInfo: string
  ): Promise<PostsResponse[]> {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: Math.floor(Math.random() * 10),
        optional: moreInfo,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => res.json());
  },
  getComments: function (id: number): Promise<CommentsResponse[]> {
    return fetch(`${BASE_URL}/posts/${id}/comments`).then((res) => res.json());
  },
};

export default API;
