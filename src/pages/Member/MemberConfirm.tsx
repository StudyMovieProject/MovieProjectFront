import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography';

const ConfirmContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const FormBox = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 500px;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Field = styled(Box)`
  width: 100%;
  margin-bottom: 1rem;
`;

const AgreementBox = styled(Box)`
  width: 100%;
  margin-top: 1rem;
`;

export const MemberConfirm = () => {
  const navigate = useNavigate();

  const toSignupComplete = () => {
    navigate('/Member/complete');
  };

  return (
    <>
      <ConfirmContainer>
        <Typography variant="h4" gutterBottom>
          회원가입 확인
        </Typography>
        <FormBox noValidate autoComplete="off">
          <Field>
            <TextField
              label="아이디"
              variant="outlined"
              fullWidth
              required
            />
          </Field>
          <Field>
            <TextField
              label="이메일"
              type="email"
              variant="outlined"
              fullWidth
              required
            />
          </Field>
          <Field>
            <TextField
              label="비밀번호"
              type="password"
              variant="outlined"
              helperText="영문, 숫자, 특수문자 2개 조합 8자 이상"
              fullWidth
              required
            />
          </Field>
          <Field>
            <TextField
              label="비밀번호 확인"
              type="password"
              variant="outlined"
              fullWidth
              required
            />
          </Field>
          <Field>
            <TextField
              label="이름"
              variant="outlined"
              fullWidth
              required
            />
          </Field>
          <Field>
            <TextField
              label="생년월일"
              type="date"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              required
            />
          </Field>
          <Field>
            <TextField
              label="휴대폰번호"
              variant="outlined"
              fullWidth
              required
            />
          </Field>
          <Field>
            <TextField
              label="주소"
              variant="outlined"
              fullWidth
              required
            />
          </Field>
          <Field>
            <TextField
              label="상세주소"
              variant="outlined"
              fullWidth
              required
            />
          </Field>
          <Field>
            <TextField
              label="우편번호"
              variant="outlined"
              fullWidth
              required
            />
          </Field>

          {/* 동의 항목 체크박스 */}
          <AgreementBox>
            <Typography variant="h6" gutterBottom>
              동의 항목
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="전체동의 (일괄 동의 체크박스)"
              />
              <FormControlLabel
                control={<Checkbox required />}
                label="회원이용약관 동의 (필수)"
              />
              <FormControlLabel
                control={<Checkbox required />}
                label="개인정보처리방침 동의 (필수)"
              />
              <Typography variant="subtitle1">
                이메일, SMS, 앱 알림 수신 동의 (선택)
              </Typography>
              <FormControlLabel
                control={<Checkbox />}
                label="이메일"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="SMS"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="앱 알림"
              />
            </FormGroup>
          </AgreementBox>

          {/* 가입하기 버튼 */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={toSignupComplete}
            sx={{ marginTop: '2rem', height: '3rem' }}
          >
            가입하기
          </Button>
        </FormBox>
      </ConfirmContainer>
    </>
  );
};

export default MemberConfirm;
