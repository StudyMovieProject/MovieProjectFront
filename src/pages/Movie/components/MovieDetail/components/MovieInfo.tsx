import { Box, Typography } from "@mui/material";

interface MovieInfoProps {
  title: string;
  content: string | number;
}

function MovieInfo({ title, content }: MovieInfoProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "2px",
      }}
    >
      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
        {title}:
      </Typography>
      <Typography variant="body2" sx={{ display: "inline" }}>
        {content}
      </Typography>
    </Box>
  );
}

export default MovieInfo;
