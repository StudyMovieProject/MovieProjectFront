import { CardContent, CardHeader } from "@mui/material";
import { IMovieDetail } from "../../../types";

type MovieDetailPlotProps = Pick<IMovieDetail, "plot">;

function MovieDetailPlot({ plot }: MovieDetailPlotProps) {
  return (
    <>
      <CardHeader
        title="줄거리"
        titleTypographyProps={{ fontWeight: "bold" }}
        sx={{
          color: "rgba(73, 73, 73, 1)",
          borderBottom: "1px solid rgb(125, 125, 125)",
        }}
      />
      <CardContent
        sx={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
          gap: "4px",
          color: "rgb(125, 125, 125)",
          borderBottom: "1px solid rgb(125, 125, 125)",
          height: "auto",
        }}
      >
        {plot}
      </CardContent>
    </>
  );
}

export default MovieDetailPlot;
