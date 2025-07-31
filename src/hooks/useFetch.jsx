
import { useState , useEffect  } from "react";
export const useFetch = (apiPath , queryTerm="")=>{

    const ApiKey = "89424dae1a07939ff3061f8140fc77d8"; 
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${ApiKey}&query=${queryTerm}`
  

  useEffect(() => {
    async function fetchMovies() {
        
         
      try {
       
        const response = await fetch(url);
        const json = await response.json();
        setData(json.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
    fetchMovies();
  }, [url]);

  return {data}





}