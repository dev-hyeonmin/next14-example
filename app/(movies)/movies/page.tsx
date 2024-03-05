'use client';

// client side data fetching
// export default function Movie() {
//     const [isLoading, setIsLoading] = useState(true);
//     const [movies, setMovies] = useState([]);
//     const getMovies = async () => {
//         const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies")
//         const json = await response.json();
        
//         setMovies(json);
//         setIsLoading(false);
//     };

//     useEffect(() => {
//         getMovies();
//     }, [])

//     return <div>{isLoading ? 'Loading...' : JSON.stringify(movies)}</div>;
// }

// server side data fetching
const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies () {
    const reponse = await fetch(URL);
    const json = await reponse.json();
    return json;
}

export default async function Movie() {
    const movies = await getMovies();
    return <div>{JSON.stringify(movies)}</div>;
}