import Link from "next/link";
import Rating from "./Rating";
import React, { useState } from "react";

function StarShipCard({ starShip }) {
  let id = starShip.url.split("https://swapi.dev/api/starships/")[1];

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
          <Rating />
        </div>
      </div>
    </Link>
  );
}

export default StarShipCard;
