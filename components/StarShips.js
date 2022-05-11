import StarShipCard from "./StarShipCard";

function StarShips({ starShips }) {
  return (
    <div className="bg-gray-700 container max-w-7xl mx-auto pb-10 px-4 ">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {starShips.map((starShip, index) => (
          <StarShipCard starShip={starShip} key={index} />
        ))}
      </div>
    </div>
  );
}

export default StarShips;
