import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
import { useTitle } from "../hooks/useTitle"
const ApiKey = "89424dae1a07939ff3061f8140fc77d8"

export const MovieDetail = ()=>{

    const params = useParams()
    const[movie,setMovie] = useState({})
    const image = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "No image found" ;
    const pageTitle = useTitle(movie.title)

    useEffect(()=> {

        async function fetchMovie() {

            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${ApiKey}`)
            const data =  await response.json()
            setMovie(data)

            
        }

        fetchMovie()




    } , [])



    return(

        <>

    <div className="flex min-h-screen py-5 justify-around ml-4" >


        <div className="max-w-sm ">
            <img src={image} alt={movie.title}></img>
        </div>

        <div className="dark:text-white p-5">
            <h1 className="text-2xl font-bold mb-3">{movie.title}</h1>
            <p>{movie.overview} </p>

            { movie.genres ? (
              <p className="my-7 flex flex-wrap gap-2">
              { movie.genres.map((genre) => (
                <span className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2" key={genre.id}>{genre.name}</span>
              )) }
            </p>
            ) : "" }

            

<div className="flex ">
              <svg aria-hidden="true" className="w-5 h-5  text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <p className="ml-2 mr-2 text-gray-900 dark:text-white">{movie.vote_average}</p>

             
              
              <span className="text-gray-900 dark:text-white">{movie.vote_count} reviews</span>
          
              </div>
          <p className="my-4">
            <span className="mr-2 font-bold">Runtime:</span>
            <span>{movie.runtime} min.</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">Budget:</span>
            <span>{movie.budget}</span>
          </p>

         

          <p className="my-4">
            <span className="mr-2 font-bold">Revenue:</span>
            <span>{movie.revenue}</span>
          </p>

          
            <p className="mr-2 font-bold">Release Date: {movie.release_date}
          </p>
          

          <p className="my-4">
            <span className="mr-2 font-bold">IMDB Code:</span>
            <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer">{movie.imdb_id}</a>
          </p>

          </div>

    </div>
      

        
      


        
        </>
    )
}