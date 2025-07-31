import { useEffect, useState } from "react"
import {Link,NavLink} from "react-router-dom"
import { useNavigate } from "react-router-dom"
export const Header = ()=>{


  const[darkMode,setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false)
  const [hidden, setHidden] = useState(true);
  const navigate = useNavigate()

  useEffect(()=>{

    localStorage.setItem("darkMode" , JSON.stringify(darkMode))

    if(darkMode){
      document.documentElement.classList.add('dark')

    }
    else{

      document.documentElement.classList.remove('dark')

    }





  } , [darkMode])

  const handleSubmit = (event)=>{

    event.preventDefault()
    const queryTerm = event.target.search.value
    event.target.reset()
    return navigate(`/search?q=${queryTerm}`)



  


  }




  const activeClass = "block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
  const inactiveClass = "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"

    return(

        <header>
            

            

<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Cinemate</span>
  </Link>
  <div className="flex md:order-2">

  <button
  onClick={() => setDarkMode(!darkMode)}
  type="button"
  className="flex items-center p-2 mr-2 text-sm font-semibold rounded-lg 
             text-gray-700 bg-white border border-gray-200 
             hover:bg-gray-100 hover:text-blue-700 
             dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 
             dark:hover:bg-gray-700 dark:hover:text-white"
>
  { darkMode ? (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M12 4V2m0 20v-2m8.485-8.485l1.414-1.414M4.222 4.222l1.414 1.414M20 12h2M2 12H4m14.364 5.636l1.414 1.414M4.222 19.778l1.414-1.414M12 6a6 6 0 000 12a6 6 0 000-12z" />
  </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
  <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 0010.58 9.79z" />
</svg>
  )}
</button>






    {/* Hamburger Menu Button (shows on mobile) */}
<button
  onClick={() => setHidden(!hidden)}
  type="button"
  className="md:hidden p-2.5 mr-1 rounded-lg text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
>
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      clipRule="evenodd"
    ></path>
  </svg>
</button>

    <div className="relative hidden md:block">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search icon</span>

      </div>
      <form onSubmit={handleSubmit}>
      <input type="text" id="search-navbar" name="search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
      </form>
    </div>
    
  </div>
    <div className={`items-center justify-between ${hidden ? "hidden" : ""} w-full md:flex md:w-auto md:order-1`} id="navbar-search">
      <div className="relative mt-3 md:hidden">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.sw3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <form onSubmit={handleSubmit}> 
      <input type="text" id="search-navbar" name= "search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
      </form>
      </div>
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <NavLink to = "/" className={({isActive})=> isActive ? activeClass : inactiveClass } end>Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies/popular" className= {({isActive})=> isActive ? activeClass : inactiveClass }>Popular</NavLink>
        </li>
        <li>
          <NavLink to="/movies/top_rated" className= {({isActive})=> isActive ? activeClass : inactiveClass }>Top Rated</NavLink>
        </li>

        <li>
          <NavLink to="/movies/upcoming" className= {({isActive})=> isActive ? activeClass : inactiveClass }>Upcoming</NavLink>
          </li>
      </ul>
    </div>
  </div>
</nav>


        </header>
    )
}