const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovie (id: string) {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export default async function MovieInfo ({ id }: { id: string }) {
    const movie = await getMovie(id);

    return (
        <h3>{JSON.stringify(movie)}</h3>
    )
}