import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const MemberConfirm = () => {
  const navigate = useNavigate();
  const toMemberComfirm = () => {
    navigate(`/Member/Confirm`);
  };

  return (
    <>
      <Header />
      <NavBar />
      <Box sx={{ display: 'flex', alignItems: 'space-between' }}>
        <p>이메일 입력(소셜가입)</p>
        <p>회원 정보 입력</p>
        <p>가입 완료</p>
      </Box>

      <p>소셜 계정으로 가입</p>
      <label htmlFor="email">이메일 주소로 가입</label>
      <input type="email" id="email" />
      <Button onClick={toMemberComfirm}>가입하기</Button>
    </>
  );
};

export default MemberConfirm;
