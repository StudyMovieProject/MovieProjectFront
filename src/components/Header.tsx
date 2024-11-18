// /** @jsxImportSource @emotion/react */
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import LoginBtn from './LoginBtn';
import { useNavigate } from 'react-router-dom';

export default function HeaderBar() {
  const navigate = useNavigate();
  // const toMembersInfo = () => {
  //   navigate(`Member/MembershipIntro`);
  // };
  const toJoin = () => {
    navigate(`/member`);
  };
  // 일괄적으로 소문자로 만들고 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavAppBar position="static">
        <LoginBtn>로그인</LoginBtn>
        <NavButton onClick={toJoin}>회원가입</NavButton>
        <LoginBtn>비회원</LoginBtn>
      </NavAppBar>
    </Box>
  );
}

const NavAppBar = styled(AppBar)`
  background-color: var(--nav-background-color);
  box-shadow: none;
  height: 1.8rem;
  flex-direction: row;
  align-items: right;
  justify-content: flex-end;
  padding-right: 1.5rem;
`;

const NavButton = styled(Button)`
  position: static;
  margin: 0;
  padding: 0 0.5rem 0 0;
  font-size: 0.8rem;
`;
