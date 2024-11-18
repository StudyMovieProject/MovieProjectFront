import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import MovieSortButtons from "./components/components/MovieSortButtons";

function Moive() {
  return (
    <Box>
      <Container maxWidth="md">
        <MovieSortButtons />
        <Outlet />
      </Container>
    </Box>
  );
}

export default Moive;
