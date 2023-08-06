import axios from "axios";
import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "./../baseUrl";
export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const navigate = useNavigate();

  async function fetchData(page = 1, tag = null, category) {
    setLoading(true);

    let url = `${baseUrl}?page=${page}`;

    if (tag) {
      url += `&tag=${tag}`;
    }
    if (category) {
      url += `&category=${category}`;
    }
    try {
      const { data } = await axios.get(url);
      setPosts(data.posts);
      console.log(posts);
      setCurrentPage(data.page);
      setTotalPage(data.totalPages);
    } catch (error) {
      console.log(error);
      setCurrentPage(1);
      setTotalPage(null);
      setPosts([]);
    }
    setLoading(false);
  }
  const handlePageChange = (page) => {
    navigate({ search: `?page=${page}` });
    setCurrentPage(page);
  };
  const values = {
    loading,
    setLoading,
    posts,
    setPosts,
    currentPage,
    setCurrentPage,
    totalPage,
    setTotalPage,
    fetchData,
    handlePageChange,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
