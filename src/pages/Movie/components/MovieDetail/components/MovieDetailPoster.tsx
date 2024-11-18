import { Box, Card, CardMedia } from "@mui/material";

interface MovieDetailPoster {
  image: string;
}

function MovieDetailPoster({ image }: MovieDetailPoster) {
  return (
    <Box>
      <Card raised>
        <CardMedia
          image={image}
          sx={{
            aspectRatio: "1 / 1.5",
          }}
        />
      </Card>
    </Box>
  );
}

export default MovieDetailPoster;
