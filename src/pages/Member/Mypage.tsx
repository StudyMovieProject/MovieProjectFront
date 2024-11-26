import {
  Typography,
  Button,
  Box,
  CardContent,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useMemberStore } from "../../store/memberSlice";
import { CenteredContainer, StyledCard } from "../../pages/Member/Login";
import styled from "@emotion/styled";
import { useNavigate } from 'react-router-dom';
import { Typo } from "./Confirm";

const Container = styled(CenteredContainer)`
  padding: 1rem 0 3rem;
`;

const PageCard = styled(StyledCard)`
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  background-color: #ffffff;
`;

const Btn = styled(Button)`
  background-color: #776B5D;
  color: white;
  width: 8rem;
  height: 2.5rem;
`;

export default function MyPage() {

  const { member } = useMemberStore();
  const { username, role } = member;
  const navigate = useNavigate();
  const toMemberInfo = () => {
    navigate(`/member/info`);
  };

  return (
    <>
      <Container>
        <Typo>
          마이페이지
        </Typo>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <PageCard>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    최근 예매내역
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    예매내역이 없습니다.
                  </Typography>
                </CardContent>
              </PageCard>
            </Grid>

            <Grid item xs={12} sm={6}>
              <PageCard>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {username} 고객님
                  </Typography>
                  <Typography variant="body1">
                    회원등급 {role}
                  </Typography>
                  <Btn
                    onClick={toMemberInfo}
                  >
                    회원정보 관리
                  </Btn>
                </CardContent>
              </PageCard>
            </Grid>

            <Grid item xs={12} sm={6}>
              <PageCard>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    1:1 문의
                  </Typography>
                  <Btn fullWidth>
                    문의 작성
                  </Btn>
                  <Typography variant="body2" color="text.secondary" mt={2}>
                    문의 내역이 없습니다.
                  </Typography>
                </CardContent>
              </PageCard>
            </Grid>

            <Grid item xs={12} sm={6}>
              <PageCard>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    관심있는 영화 (좋아요)
                  </Typography>
                  <Btn fullWidth>
                    영화 목록 보기
                  </Btn>
                  <Typography variant="body2" color="text.secondary" mt={2}>
                    관심있는 영화가 없습니다.
                  </Typography>
                </CardContent>
              </PageCard>
            </Grid>
          </Grid>
        </Box>


      </Container >
    </>
  );
};

//TODO
// [ ] 회원 정보 가져오기: https://www.notion.so/146b729eeb0481ab85fac4a2da187e10
// [ ] 회원정보 수정 API : https://www.notion.so/146b729eeb0481bbbf59e9eaba0245fb
//        [ ] 비밀번호 변경 : https://www.notion.so/146b729eeb0481888a35c820c201745a
// [ ] 탈퇴: https://www.notion.so/146b729eeb04814b8cc7e7a37b5c6f15
// [ ] 좋아요한 영화목록: https://www.notion.so/149b729eeb04805b9872da12681f85b4

// [ ] 1:1 문의작성, 문의조회, 리뷰작성, 예매 조회 등