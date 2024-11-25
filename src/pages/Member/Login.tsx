import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useAuthStore } from "../../store/authSlice";
import { useMutation } from '@tanstack/react-query';
import axios from "axios";

const CenteredContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  margin-top: 1rem;
`;

const FormBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StyledCard = styled(Card)`
  min-width: 20rem;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  background-color: #ffffff;
`;

const StyledLabel = styled.label`
  align-self: flex-start;
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 1rem;
`;

export default function MemberLogin() {
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const { mutate: memberLogin } = useMutation<{ code: number; msg: string; data: string },
    Error, typeof login>({
      mutationFn: async (memberLogin) => {
        const res = await axios.post("http://localhost:8080/api/members/login", memberLogin);
        return res.data;
      },
      onSuccess: (data: any) => {
        data.code === 1 ? navigate("/member/complete") : console.error("회원가입 실패:", data.msg);
      }
    });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    memberLogin(login);
  };

  return (
    <>
      <CenteredContainer>
        <StyledCard>
          <CardContent>
            <Typography variant="h4" component="div" gutterBottom sx={{ fontSize: '2rem', fontWeight: 'bold', paddingBottom: '0.5rem' }}>
              로그인
            </Typography>
            <FormBox>
              <StyledLabel htmlFor="email">소셜 계정으로 로그인</StyledLabel>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' },
                  display: 'flex',
                  gap: '1rem',
                  marginBottom: '2rem',
                }}
                noValidate
                autoComplete="off"
              >
                <Button variant="contained" sx={{ backgroundColor: "#8ae28f", width: "8rem", height: "2.5rem" }}>
                  네이버(임시)
                </Button>
                <Button variant="contained" sx={{ backgroundColor: "#f5f590", width: "8rem", height: "2.5rem" }} >
                  카톡(임시)
                </Button>
              </Box>
              <StyledLabel htmlFor="email">이메일 주소로 로그인</StyledLabel>
              <TextField
                error
                id="email"
                label="이메일"
                variant="standard"
                fullWidth
                required
                margin="normal"
                sx={{ color: 'black' }}
              />
              <TextField
                error
                id="password"
                label="비밀번호"
                variant="standard"
                fullWidth
                required
                margin="normal"
                sx={{ color: 'black' }}
              />
              <Button type="submit" sx={{
                margin: "2rem", width: "12rem", height: "3rem", backgroundColor: "#776B5D", color: "white", '&:hover': {
                  backgroundColor: '#403931',
                },
              }} variant="contained" onClick={handleSubmit}>
                로그인
              </Button>
            </FormBox>
          </CardContent>
        </StyledCard>
      </CenteredContainer >
    </>
  )
};

// TODO
// [ ] 로그인 실패시 모달 달기 