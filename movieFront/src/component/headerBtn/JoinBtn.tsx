import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledJoinButton = styled(Button)`
  color: var(--gray-text-color);

  background-color: var(--nav-background-color);
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: #dcdcdc;
  }
`;

export const JoinBtn = () => {
  const navigate = useNavigate();

  const toJoin = () => {
    navigate(`/member`);
  };
  return <StyledJoinButton onClick={toJoin}>회원가입</StyledJoinButton>;
};
