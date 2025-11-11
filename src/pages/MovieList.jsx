import { useState, useEffect } from "react";
import Card from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import {useTitle} from "../hooks/useTitle";

export const MovieList = ({apiPath , title} ) => {
  
    const{data:movies} = useFetch(apiPath)
    const pageTitle = useTitle(title)

  
  return (
    <div className="flex flex-wrap justify-start py-7 dark:bg-slate-800">
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
