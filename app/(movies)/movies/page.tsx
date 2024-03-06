// client side data fetching
// export default function Movie() {
//     const [isLoading, setIsLoading] = useState(true);
//     const [movies, setMovies] = useState([]);
//     const getMovies = async () => {
//         const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies")
//         const json = await response.json();

import Link from "next/link";


//         setMovies(json);
//         setIsLoading(false);
//     };

//     useEffect(() => {
//         getMovies();
//     }, [])

//     return <div>{isLoading ? 'Loading...' : JSON.stringify(movies)}</div>;
// }

// server side data fetching
const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

export default async function Movie() {
    const movies = await getMovies();
    return (
        <div>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
        </div>
    );
}