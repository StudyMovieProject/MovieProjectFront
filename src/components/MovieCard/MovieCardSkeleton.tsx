import { Card, CardContent, CardHeader, Skeleton } from "@mui/material";

function MovieCardSkeleton() {
  return (
    <Card
      sx={{
        aspectRatio: "1 / 1.5",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent sx={{ backgroundColor: "white", height: "100%" }}>
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </CardContent>
      <CardHeader
        subheader={
          <Skeleton variant="text" width="60%" sx={{ margin: "0 auto" }} />
        }
        sx={{
          paddingTop: "4px",
          paddingBottom: "4px",
          textAlign: "center",
        }}
      />
    </Card>
  );
}

export default MovieCardSkeleton;
