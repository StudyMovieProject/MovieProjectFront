import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from "@mui/material";
import { IMovieDetail } from "../../pages/Movie/types";
import { useNavigate } from "react-router-dom";

type MovieCardProps = Pick<IMovieDetail, "id" | "posterImage" | "title">;

function MovieCard({ id, posterImage, title }: MovieCardProps) {
  const navigate = useNavigate();
  return (
    <Card
      key={id}
      sx={{
        aspectRatio: "1 / 1.5",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent
        sx={{
          height: "100%",
          width: "100%",
          padding: "0px",
        }}
      >
        <CardMedia
          image={
            posterImage ||
            "http://lsh318204.cafe24.com/wp-content/uploads/kboard_attached/9/201906/5cf7295310dac4923535-600x338.jpg"
          }
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <CardActions
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              padding: "0px",
              opacity: 0,
              ":hover": {
                opacity: 1,
              },
              transition: "opacity 0.2s ease-in-out",
            }}
          >
            <Button
              sx={{
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                width: "100%",
                height: "50%",
                borderRadius: "0px",
                margin: "0px",
                ":hover": {
                  color: "orange",
                  border: "2px solid orange",
                },
              }}
            >
              예매하기
            </Button>
            <Button
              onClick={() => navigate(`/movie/info?MovieCode=${id}`)}
              sx={{
                color: "white",
                width: "100%",
                height: "50%",
                borderRadius: "0px",
                backgroundColor: "rgba(128, 128, 128, 0.7)",
                margin: "0px",
                ":hover": {
                  color: "orange",
                  border: "2px solid orange",
                },
              }}
            >
              상세정보
            </Button>
          </CardActions>
        </CardMedia>
      </CardContent>
      <CardHeader
        subheader={title}
        sx={{
          paddingTop: "4px",
          paddingBottom: "4px",
          textAlign: "center",
        }}
      />
    </Card>
  );
}

export default MovieCard;
