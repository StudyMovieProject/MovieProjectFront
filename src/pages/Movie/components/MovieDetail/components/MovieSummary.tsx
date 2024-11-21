import { CardContent, CardHeader } from "@mui/material";
import MovieInfo from "./MovieInfo";
import { IMovieDetail } from "../../../types";

type MovieSummaryProps = Pick<
  IMovieDetail,
  "title" | "startDate" | "endDate" | "showTime" | "popularity"
>;

function MovieSummary({
  title,
  startDate,
  endDate,
  popularity,
  showTime,
}: MovieSummaryProps) {
  return (
    <>
      <CardHeader
        title={title}
        titleTypographyProps={{ fontWeight: "bold" }}
        sx={{
          color: "rgba(73, 73, 73, 1)",
          borderBottom: "2px solid rgb(125, 125, 125)",
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
          marginBottom: "20px",
        }}
      >
        <MovieInfo title="상영 시작일" content={startDate} />
        <MovieInfo title="상영 종료일" content={endDate} />
        <MovieInfo title="상영시간" content={`${showTime}분`} />
        <MovieInfo title="인기도" content={popularity} />
      </CardContent>
    </>
  );
}

export default MovieSummary;
