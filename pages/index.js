import axios from "axios";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import StarShips from "../components/StarShips";
import { useState, useEffect } from "react";

export default function Home() {
  const [pageNum, setPageNum] = useState(1);
  const [starShips, setStarShips] = useState([]);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getStarShips() {
      const res = await axios(
        `https://swapi.dev/api/starships/?page=${pageNum}`
      );
      setTotal(res.data.count);
      setStarShips(res.data.results);
    }
    getStarShips();
  }, [pageNum]);

  useEffect(() => {
    async function getSearchShips() {
      const res = await axios(
        `https://swapi.dev/api/starships/?search=${search}`
      );
      setTotal(res.data.count);
      setStarShips(res.data.results);
    }
    getSearchShips();
  }, [search]);

  const handlePageChange = (page) => {
    setPageNum(page);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center pt-5 ">
        Star Wars StarShip
      </h1>
      <SearchBar onChange={handleChange} />
      <StarShips starShips={starShips} />
      <Pagination
        pageSize={10}
        itemsCount={total}
        onPageChange={handlePageChange}
        currentPage={pageNum}
      />
    </div>
  );
}
