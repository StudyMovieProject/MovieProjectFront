import { Box, Skeleton } from "@mui/material";

function MovieDetailSkeleton() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 4fr",
        gap: "40px",
        aspectRatio: "1 / 0.5",
      }}
    >
      <Skeleton variant="rectangular" width="100%" height="50%" />
      <Box>
        <Skeleton variant="text" width="60%" height="20%" />
        <Skeleton variant="rectangular" width="100%" height="35%" />
        <Skeleton variant="text" width="60%" height="20%" />
        <Skeleton variant="rectangular" width="100%" height="60%" />
      </Box>
    </Box>
  );
}

export default MovieDetailSkeleton;
