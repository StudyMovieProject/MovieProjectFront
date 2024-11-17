import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getMovieList } from "../../../../api/movieApi";
import { ApiResponse, IMovieList } from "../../types";
import MovieCardSkeleton from "../../../../components/MovieCard/MovieCardSkeleton";
import MovieCard from "../../../../components/MovieCard/MovieCard";

function BoxOffice() {
  const { isLoading: moviesLoading, data: moviesData } = useQuery<
    ApiResponse<IMovieList>
  >({
    queryKey: ["movieList"],
    queryFn: () => getMovieList("LATEST"),
  });

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "8px",
      }}
    >
      {moviesLoading
        ? [...Array.from(Array(100).keys())].map((item) => (
            <MovieCardSkeleton key={item} />
          ))
        : moviesData?.data?.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              posterImage={movie.posterImage}
            />
          ))}
    </Box>
  );
}

export default BoxOffice;
