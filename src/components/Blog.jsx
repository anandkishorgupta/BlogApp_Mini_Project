import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";
import Spinner from "./Spinner";
const Blog = () => {
  const { posts, loading } = useContext(AppContext);
  return (
    <div className="flex justify-center items-center mt-20 mb-20">
      <div className="max-w-[650px] flex flex-col gap-4">
        {loading ? (
          <Spinner />
        ) : posts.length === 0 ? (
          <div>Post not found</div>
        ) : (
          posts.map((post) => (
          <BlogDetails key={post.id} post={post}/>
          ))
        )}
      </div>
    </div>
  );
};

export default Blog;
