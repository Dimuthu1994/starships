import Link from "next/link";
import Rating from "./Rating";
import React, { useState, useEffect } from "react";
import axios from "axios";

function StarShipCard({ starShip }) {
  const [movieTitle, setMovieTitle] = useState([]);

  let id = starShip.url.split("https://swapi.dev/api/starships/")[1];
  let filmArray = starShip.films;

  useEffect(() => {
    async function FetchAll() {
      const res = await axios.all(
        filmArray.map((endpoint) => axios.get(endpoint))
      );

      const arrayMap = res.map((film) => film.data.title);
      setMovieTitle(arrayMap);
    }
    FetchAll();
  }, []);

  return (
    <Link href={`/starship/${id}`}>
      <div className="bg-white shadow-sm rounded-md cursor-pointer">
        <div className="px-6 py-2 ">
          <div className="font-bold text-xl mb-1 text-center">
            {starShip.name}
          </div>
          <p className="text-gray-700 text-base mb-1">
            cost:{starShip.cost_in_credits}
          </p>
          <p className="text-gray-700 text-base mb-1">Featured Films:</p>

          <ul className="list-disc">
            {movieTitle.map((movie, i) => (
              <li key={i}>{movie}</li>
            ))}
          </ul>

          <Rating />
        </div>
      </div>
    </Link>
  );
}

export default StarShipCard;
