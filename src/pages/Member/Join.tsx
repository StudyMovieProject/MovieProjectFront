import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Outlet } from "react-router-dom";
import { useMemberStore } from "../../store/memberSlice";
import { Typo } from "./Confirm";

const CenteredContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  margin-top: 1rem;
`;

// const StepsBox = styled(Box)`
//   display: flex;
//   justify-content: space-between;
//   width: 30rem;
//   margin-bottom: 20px;
// `;

const FormBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  //width: 10rem;
  //width: 100%;
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

export default function Member() {
  const navigate = useNavigate();
  const toMemberConfirm = () => {
    navigate(`/member/confirm`);
  };

  const { member, setMember } = useMemberStore();

  const mailToConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMember({ ...member, [name]: value });
  };

  return (
    <>
      <Outlet />
      <CenteredContainer>
        <StyledCard>
          <CardContent>
            <Typo>
              회원가입
            </Typo>
            <FormBox>
              <StyledLabel htmlFor="email">소셜 계정으로 가입</StyledLabel>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                  display: "flex",
                  gap: "1rem",
                  marginBottom: "2rem",
                }}
                noValidate
                autoComplete="off"
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#8ae28f",
                    width: "8rem",
                    height: "2.5rem",
                  }}
                >
                  네이버(임시)
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#f5f590",
                    width: "8rem",
                    height: "2.5rem",
                  }}
                >
                  카톡(임시)
                </Button>
              </Box>

              <StyledLabel htmlFor="email">이메일 주소로 가입</StyledLabel>
              <TextField
                error
                id="email"
                name="email"
                label="Email"
                variant="standard"
                fullWidth
                required
                margin="normal"
                sx={{ color: "black" }}
                value={member.email}
                onChange={mailToConfirm}
              />
              <Button
                type="submit"
                sx={{
                  margin: "2rem",
                  width: "12rem",
                  height: "3rem",
                  backgroundColor: "#776B5D",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#403931",
                  },
                }}
                variant="contained"
                onClick={toMemberConfirm}
              >
                가입하기
              </Button>
            </FormBox>
          </CardContent>
        </StyledCard>
      </CenteredContainer>
    </>
  );
}

//TODO
// [ ] 이미 가입된 아이디일 경우 비밀번호 찾기 페이지로 이동
