import { Metadata } from "next";

export default function MovieDetail({
    params: { id },
}: {
    params: { id: string };
}) {
    return <h1>Movie {id}</h1>;
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