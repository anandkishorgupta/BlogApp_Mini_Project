import { useLocation, useNavigate } from "react-router-dom";
import Blog from "../components/Blog";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

const CategoryPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header />

        <div className="flex items-center gap-3  w-[650px] " style={{margin:"90px auto"}}>
          <button
            onClick={() => navigation(-1)}
            className="rounded-md py-2 px-4 border"
          >
            back
          </button>
          <h1 className="font-bold text-2xl">
            Blogs on <span>{category}</span>
          </h1>
        </div>

      <div className="mt-[-70px]">
        <Blog />
      </div>
      <Pagination />
    </div>
  );
};

export default CategoryPage;
