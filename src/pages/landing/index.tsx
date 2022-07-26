import React from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <ButtonWrapper>
        <Button sx={{ p: 4 }} size='large' onClick={() => navigate('/apply')}>
          AI 학습용 데이터 크라우드 워커 지원하러가기
        </Button>
        <Button sx={{ p: 4 }} size='large' onClick={() => navigate('/login')}>
          관리자 로그인
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
`;

const ButtonWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 10px;
`;
