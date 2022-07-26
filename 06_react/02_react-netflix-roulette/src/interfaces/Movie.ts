export interface Movie {
    id: number,
    title: string,
    genres: string[],
    vote_average: number,
    release_date: string,
    runtime: number,
    poster_path: string,
    overview: string,
    tagline?: string,
    vote_count?: number,
    budget?: number,
    revenue?: number
}
