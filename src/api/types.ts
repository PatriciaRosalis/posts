export type PostsResponse = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type CommentsResponse = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
