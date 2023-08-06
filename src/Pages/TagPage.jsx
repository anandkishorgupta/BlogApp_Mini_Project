import { useLocation, useNavigate } from "react-router-dom";
import Blog from "../components/Blog";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

const TagPage = () => {
  const navigation=useNavigate();
  const location=useLocation()
  const tag=location.pathname.split("/").at(-1)
  return (
    <div>
      <Header/>
      <div className="mt-[90px] flex items-center gap-3  w-[650px] "  style={{margin:"90px auto"}}>
      <button
            onClick={() => navigation(-1)}
            className="rounded-md py-2 px-4 border"
          >
            back
          </button>
        <h2  className="font-bold text-2xl">
          Blogs Tagged <span>#{tag}</span>
        </h2>
      </div>
      <div className="mt-[-70px]">
        <Blog />
      </div>
      <Pagination/>
    </div>
  )
}

export default TagPage