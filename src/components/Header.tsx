// /** @jsxImportSource @emotion/react */
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function HeaderBar() {
  const navigate = useNavigate();

  const toMember = () => {
    navigate(`/member`); // 회원가입
  };
  const toLogin = () => {
    navigate(`/member/membershipIntro`); // 로그인 
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavAppBar position="static">
        <HeaderBtn onClick={toLogin}>로그인</HeaderBtn>
        <HeaderBtn onClick={toMember}>회원가입</HeaderBtn>
        <HeaderBtn onClick={toLogin}>비회원</HeaderBtn>
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

export const HeaderBtn = styled(Button)`
  color: black;
  border: none;
  font-size: 1rem;
  /* &:hover {
  } */
`;
