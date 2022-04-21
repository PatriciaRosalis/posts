import { useQuery } from "react-query";
import API from "../api/api";
import Post from "../components/home/post/Post";
import Nav from "../components/shared/Nav";

export default function Home() {
  const { isLoading, data, isError } = useQuery("posts", API.getPosts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>fudeu</div>;
  }

  return (
    <div className=" flex flex-wrap bg-neutral-100">
      <Nav />
      {data?.map((post) => {
        return <Post {...post} />;
      })}
    </div>
  );
}
