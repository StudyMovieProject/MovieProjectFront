import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography';

import axios from 'axios';
import { useState } from 'react';

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
    navigate('/member/complete');
  };

  const [formData, setFormData] = useState({
    memberId: "",
    username: "",
    email: "",
    tel: "",
    zipcode: "",
    address: "",
    detailAddress: "",
    fullname: "",
    role: "",
    status: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        // agreements: {
        //   ...prev.agreements,
        //   [name]: checked,
        // },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 비밀번호 확인
    // if (formData.password !== formData.confirmPassword) {
    //   alert("비밀번호가 일치하지 않습니다.");
    //   return;
    // }
    try {
      const response = await axios.post('/users', formData);
      console.log('회원가입 성공:', response.data);
      navigate('/Member/complete');
    } catch (error) {
      console.error('회원가입 실패:', error);
    }
  };

  return (
    <>
      <ConfirmContainer>
        <Typography variant="h4" gutterBottom>
          회원가입 확인
        </Typography>
        <FormBox noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Field>
            <TextField
              label="아이디"
              variant="outlined"
              fullWidth
              required
              value={formData.username}
              onChange={handleChange}
            />
          </Field>
          <Field>
            <TextField
              label="이메일"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={formData.email}
              onAbort={handleChange}
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
              // value={formData.password}
              onAbort={handleChange}
            />
          </Field>
          <Field>
            <TextField
              label="비밀번호 확인"
              type="password"
              variant="outlined"
              fullWidth
              required
              //value={formData.password}
              onAbort={handleChange}
            />
          </Field>
          <Field>
            <TextField
              label="이름"
              variant="outlined"
              fullWidth
              required
              value={formData.username}
              onAbort={handleChange}
            />
          </Field>
          <Field>
            <TextField
              label="휴대폰번호"
              variant="outlined"
              fullWidth
              required
              value={formData.tel}
              onAbort={handleChange}
            />
          </Field>
          <Field>
            <TextField
              label="주소"
              variant="outlined"
              fullWidth
              required
              value={formData.address}
              onAbort={handleChange}
            />
          </Field>
          <Field>
            <TextField
              label="상세주소"
              variant="outlined"
              fullWidth
              required
              value={formData.detailAddress}
              onAbort={handleChange}
            />
          </Field>
          <Field>
            <TextField
              label="우편번호"
              variant="outlined"
              fullWidth
              required
              value={formData.zipcode}
              onAbort={handleChange}
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

// TODO
// [ ] 전체 동의 버튼 누르면 일괄 동의 되도록 처리
// [ ] validation
// [ ] 폼 옆에 각각 폼 이름 작성
// [ ] outlet 해결 
// [ ] 다음 페이지에 role, status 데이터 