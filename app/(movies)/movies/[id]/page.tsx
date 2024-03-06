import { Metadata } from "next";
import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-video";
import Loading from "./loading";

// const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

// async function getMovie (id: string) {
//     const response = await fetch(`${API_URL}/${id}`);
//     return response.json();
// }

// async function getVideos (id: string) {
//     const response = await fetch(`${API_URL}/${id}/videos`);
//     return response.json();
// }

export default async function MovieDetail({
    params: { id },
}: {
    params: { id: string };
}) {
    return (
        <div>
            <Suspense fallback={<Loading/>}>
                <MovieInfo id={id}/>
            </Suspense>

            <Suspense fallback={<Loading/>}>
                <MovieVideos id={id}/>
            </Suspense>
        </div>
    );
}


export async function generateMetadata({
    params: { id },
}: {
    params: { id: string };
}): Promise<Metadata> {
    return {
        title: `Movices ${id}`,
    }
}