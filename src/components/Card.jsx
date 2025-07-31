import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  const { id, overview, original_title, poster_path } = movie;
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-17">
      <Link to={`/movies/${id}`}>
        <img
          className="rounded-t-lg"
          src={poster_path ? `${imageBaseUrl}${poster_path}` : "https://via.placeholder.com/500x750?text=No+Image"}
          alt={original_title}
        />
      </Link>
      <div className="p-5">
        <Link to={`/movies/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {original_title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview || "No description available."}
        </p>
      </div>
    </div>
  );
};

export default Card;
