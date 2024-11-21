import { Box, Button } from "@mui/material";
import { useMatch } from "react-router-dom";
import { useMovieSortStore } from "../../../../store/movieStore";

function MovieSortButtons() {
  const movielatestMatch = useMatch("/movie/latest");
  const movieCommingMatch = useMatch("/movie/comming");

  const validMatch = movielatestMatch || movieCommingMatch;

  const { sort, toggleSortByRelease, toggleSortByAlphabet } =
    useMovieSortStore();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        paddingTop: "16px",
        paddingBottom: "16px",
        paddingRight: "8px",
      }}
    >
      <Box
        sx={{
          opacity: validMatch ? 1 : 0,
        }}
      >
        <Button
          color="inherit"
          onClick={toggleSortByRelease}
          sx={{
            color: sort ? "gray" : "",
          }}
        >
          개봉일순
        </Button>
        |
        <Button
          color="inherit"
          onClick={toggleSortByAlphabet}
          sx={{
            color: sort ? "" : "gray",
          }}
        >
          가나다순
        </Button>
      </Box>
    </Box>
  );
}

export default MovieSortButtons;
