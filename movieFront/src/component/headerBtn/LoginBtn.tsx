import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from '@emotion/styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  // TODO [ ] 모달 모바일 반응형 추가
};

interface LoginBtnProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Btn = styled(Button)``;

export default function LoginBtn({ children }: LoginBtnProps) {
  const [open, setOpen] = React.useState(false);
  const toggleModal = () => setOpen(prev => !prev);

  return (
    <>
      <Btn onClick={toggleModal}>{children}</Btn>
      <Modal open={open} onClose={() => setOpen(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            아이디(이메일), 비밀번호 / 회원, 비회원 로그인, 회원가입
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            네이버, 카카오톡 소셜 로그인 / 없는 기능: 휴대폰 번호로 로그인
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
