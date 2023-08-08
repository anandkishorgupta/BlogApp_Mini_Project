import { useContext, useEffect } from "react";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import BlogPage from "./Pages/BlogPage";
import CategoryPage from "./Pages/CategoryPage";
import Home from "./Pages/Home";
import TagPage from "./Pages/TagPage";
import { AppContext } from "./context/AppContext";
const App = () => {
  const { fetchData } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      console.log(tag)
      fetchData(Number(page), tag);
    } else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchData(Number(page),null,category);
    } else {
      fetchData(Number(page));
    }
  }, [location.pathname, location.search]);
  return (
    <div className="px-4 overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogId" element={<BlogPage />} />
        <Route path="/tags/:tag" element={<TagPage />} />
        <Route path="/categories/:category" element={<CategoryPage />} />
      </Routes>
    </div>
  );
};

export default App;
