import Link from "next/link";

function MovieDetail({ film }) {
  const movie = film.results[0];
  console.log(movie.title);
  return (
    <div className="container max-w-4xl mx-auto pt-6">
      <div className="px-3">
        <h1 className="font-bold text-xl my-2">{movie.title}</h1>
        <p className="text-gray-600 text-sm mt-4">
          Episode Id:<span className="font-bold"> {movie.episode_id}</span>
        </p>
        <p className="text-gray-600 text-sm mt-4">
          Opening Crawel:
          <span className="font-bold"> {movie.opening_crawl}</span>
        </p>
        <p className="text-gray-600 text-sm mt-4">
          Director:
          <span className="font-bold"> {movie.director}</span>
        </p>
        <p className="text-gray-600 text-sm mt-4">
          Producer:
          <span className="font-bold"> {movie.producer}</span>
        </p>
        <p className="text-gray-600 text-sm mt-4">
          Release Date:
          <span className="font-bold">
            {" "}
            {movie.release_date.split("-").reverse().join("-")}
          </span>
        </p>
        <Link href="/">
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MovieDetail;

export async function getServerSideProps(context) {
  let { movie } = context.query;
  movie = movie.replace(/-/g, " ");
  const res = await fetch(`https://swapi.dev/api/films/?search=${movie}`);
  const film = await res.json();

  return { props: { film } };
}
