import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

function StarShipDetail({ starShip }) {
  const [movieTitle, setMovieTitle] = useState([]);
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

  const a = movieTitle.map((title) => title.replace(/\s+/g, "-").toLowerCase());

  return (
    <div className="container max-w-4xl mx-auto pt-6">
      <div className="px-3">
        <h1 className="font-bold text-xl my-2">{starShip.name}</h1>
        <p className="text-gray-600 text-sm mt-4">
          Cost:<span className="font-bold"> {starShip.cost_in_credits}</span>
        </p>
        <p className="text-gray-600 text-sm mt-4">
          Length:<span className="font-bold"> {starShip.length}</span>
        </p>
        <p className="text-gray-600 text-sm mt-4">
          Max Atmospheric Speed:
          <span className="font-bold"> {starShip.max_atmosphering_speed}</span>
        </p>
        <p className="text-gray-600 text-sm mt-4">
          Crew:
          <span className="font-bold"> {starShip.crew}</span>
        </p>

        <p className="text-gray-600 text-sm mt-4">
          Featured Films:
          <div className="flex justify-start">
            <ul className="bg-white rounded-lg w-96 text-gray-900">
              {a.map((movie, i) => (
                <Link href={`/${movie}`} key={i}>
                  <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg font-bold cursor-pointer">
                    {movie}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </p>
      </div>
    </div>
  );
}

export default StarShipDetail;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`https://swapi.dev/api/starships/${id}`);
  const starShip = await res.json();

  return { props: { starShip } };
}
