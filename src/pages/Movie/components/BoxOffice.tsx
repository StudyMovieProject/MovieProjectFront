import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getMovieList } from "../../../api/movieApi";
import MovieCardSkeleton from "../../../components/MovieCard/MovieCardSkeleton";
import MovieCard from "../../../components/MovieCard/MovieCard";
import { ApiResponse } from "../../../typese/types";
import { IMovieList } from "../../../typese/movieTypes";

function BoxOffice() {
  const { isLoading: moviesLoading, data: moviesData } = useQuery<
    ApiResponse<IMovieList>
  >({
    queryKey: ["movieList"],
    queryFn: () => getMovieList("LATEST"),
    gcTime: Infinity,
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
        ? [...Array.from(Array(12).keys())].map((item) => (
            <MovieCardSkeleton key={item} />
          ))
        : Array.isArray(moviesData?.data) && //.map is not a function 에러 해결
          moviesData?.data.map((movie) => (
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
