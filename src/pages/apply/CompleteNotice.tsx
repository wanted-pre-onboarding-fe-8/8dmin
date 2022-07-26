import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

interface CompleteNoticeProps {
  closeModal: () => void;
}

function CompleteNotice({ closeModal }: CompleteNoticeProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
    closeModal();
  };

  return (
    <Wrapper>
      <p>지원이 완료되었습니다</p>
      <Button onClick={handleClick}>확인</Button>
    </Wrapper>
  );
}

export default CompleteNotice;

const changeColor = keyframes`
  from {color :#1976d2 }
  to{color : #9cc6ef}
`;

const Wrapper = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  gap: 20px;
  width: 80vw;
  height: 10vh;
  min-height: 120px;
  max-width: 400px;
  justify-content: center;
`;

const Button = styled.button`
  width: fit-content;
  align-self: end;
  background-color: inherit;
  border: none;
  color: #1976d2;
  cursor: pointer;
  &:hover {
    color: #9cc6ef;
    animation: ${changeColor};
    animation-duration: 0.1s;
  }
`;
