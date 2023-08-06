import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BlogDetails from "../components/BlogDetails";
import Header from "../components/Header";
import { AppContext } from "../context/AppContext";
const BlogPage = () => {
  let newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const [blog, setBlog] = useState(null);
  const [relatedblogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { loading, setLoading } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const { data } = await axios.get(url);
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log(error);
      setBlog(null);
      setRelatedBlogs(null);
    }
    setLoading(false);
  }
  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center mt-20 mb-4">
        <div className="max-w-[650px]">
          <div className="mb-2">
            <button
              onClick={() => navigation(-1)}
              className="border rounded-md px-4 py-2"
            >
              back
            </button>
          </div>

          {loading ? (
            <p>loading</p>
          ) : blog ? (
            <div>
              <BlogDetails post={blog} />
              <h1 className="font-bold text-xl mb-1">Related Blogs</h1>
              {relatedblogs.map((post) => (
                <div key={post.id}>
                  <BlogDetails post={post} />
                </div>
              ))}
            </div>
          ) : (
            <p>not found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
