import Link from "next/link";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Rating from "@mui/material/Rating";

function StarShipCard({ starShip }) {
  const [movieTitle, setMovieTitle] = useState([]);
  const [value, setValue] = useState(0);

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

  // const handleRating = (e, newValue) => {
  //   setValue(newValue);
  //   //starShip.rating = newValue.toString();
  // };

  return (
    <div className="bg-white shadow-sm rounded-md cursor-pointer">
      <div className="px-6 py-2 ">
        <Link href={`/starship/${id}`}>
          <a>
            <div className="font-bold text-xl mb-1 text-center">
              {starShip.name}
            </div>
            <p className="text-gray-700 text-base mb-1">
              <span className="font-bold">cost:</span>
              {starShip.cost_in_credits}
            </p>
            <p className="text-gray-700 text-base mb-1">
              <span className="font-bold">Featured Films:</span>
            </p>

            <ul className="list-disc">
              {movieTitle.map((movie, i) => (
                <li key={i}>{movie}</li>
              ))}
            </ul>
          </a>
        </Link>

        <Rating
          name={starShip.name}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </div>
    </div>
  );
}

export default StarShipCard;
