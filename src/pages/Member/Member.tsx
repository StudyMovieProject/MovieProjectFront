import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
//import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import { Theme } from '@mui/material';
// import { BoxTypeMap } from '@mui/system';
// import { OverridableComponent } from '@mui/types';
import styled from '@emotion/styled';

const CenteredContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

// 상단의 단계를 표시하는 박스
const StepsBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin-bottom: 20px;
`;

// 폼 요소를 감싸는 박스
const FormBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

// 입력 필드 스타일링
// const StyledInput = styled.input`
//   width: 100%;
//   padding: 8px;
//   margin: 8px 0;
//   box-sizing: border-box;
// `;

// 레이블 스타일링
// const StyledLabel = styled.label`
//   align-self: flex-start;
//   margin-bottom: 5px;
// `;

export const Member = () => {
  const navigate = useNavigate();
  const toMemberConfirm = () => {
    navigate(`/Member/Confirm`);
  };

  return (
    <CenteredContainer>
      {/* 단계 표시 */}
      <StepsBox>
        <p>이메일 입력(소셜가입)</p>
        <p>회원 정보 입력</p>
        <p>가입 완료</p>
      </StepsBox>

      {/* 가입 양식 */}
      <FormBox>
        <p>소셜 계정으로 가입</p>
        {/* <StyledLabel htmlFor="email">이메일 주소로 가입</StyledLabel> */}
        {/* <Box
          component="form"
          sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              error
              id="standard-error"
              label="Error"
              defaultValue="Hello World"
              variant="standard"
            />
            <TextField
              error
              id="standard-error-helper-text"
              label="Error"
              defaultValue="Hello World"
              helperText="Incorrect entry."
              variant="standard"
            />
          </div>

        </Box> */}
        <Button sx={{ margin: "3rem", width: "13rem", height: "3rem", backgroundColor: "gray", color: "white" }} variant="contained" onClick={toMemberConfirm}>
          이메일 주소로 가입하기
        </Button>
      </FormBox>


    </CenteredContainer>

    // <>
    //   <CenteredContainer>
    //     <StepsBox>
    //       <p>이메일 입력 (소셜가입)</p>
    //       <p>회원 정보 입력</p>
    //       <p>가입 완료</p>
    //     </StepsBox>
    //     <FormBox>
    //       <p>소셜 계정으로 가입</p>
    //       <StyledLabel htmlFor="email">이메일 주소로 가입</StyledLabel>
    //       <>
    //         {/* <TextField
    //           error
    //           id="standard-error-helper-text"
    //           label="Error"
    //           defaultValue="Hello World"
    //           helperText="Incorrect entry."
    //           variant="standard"></TextField> */}

    //       </>
    //       <Button onClick={toMemberComfirm}>가입하기</Button>
    //     </FormBox>
    //     <CenteredContainer />
    //   </>
  )
};


export default Member;

