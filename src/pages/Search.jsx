import { useSearchParams } from "react-router-dom"
import { useFetch } from "../hooks/UseFetch"
import Card from '../components/Card'
import { useTitle } from "../hooks/useTitle"

export const Search = ({apiPath})=>{

    const [searchParams] = useSearchParams()
    const queryTerm = searchParams.get("q")

    const {data:movies} = useFetch(apiPath,queryTerm)
    const pageTitle = useTitle(`Search result for ${queryTerm}`)


    return(

        <>

        <p className="text-2xl font-bold text-white pt-5 text-center">{movies.length===0 ? `No results found for "${queryTerm}"` : `"${movies.length}" results found for "${queryTerm}"` } </p>

<div className="flex flex-wrap justify-start py-7 dark:bg-slate-800">
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>





        

       
        


        </>
    )
}