import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {

  const { currentPage,
    totalPage,
    fetchData
  } = useContext(AppContext);

  return (
    <div className=" py-2 w-full flex justify-center items-center border-t-2 fixed bottom-0 bg-white h-14 ">
      <div className="w-[650px]  flex justify-between items-center ">
        <div className="flex gap-3">
          {
            currentPage > 1 &&
            <button type="button" className="border border-gray-300 rounded-md py-1 px-3"  onClick={() => fetchData(currentPage - 1)}>Previous</button>
          }
          {
            currentPage < totalPage &&
            <button type="button" className="border border-gray-300 rounded-md py-1 px-3 "  onClick={() => fetchData(currentPage + 1)}>Next</button>
          }

        </div>
        <div>
          <p className="font-semibold">
          {`page ${currentPage} of ${totalPage}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pagination;

