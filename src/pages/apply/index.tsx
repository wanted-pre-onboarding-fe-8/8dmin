import React from 'react';
import styled from 'styled-components';
import UserInfo from './UserInfo';

export default function index() {
  return (
    <Wrapper>
      <UserForm>
        <Title>{'크라우드 워커에 지원하기 위해\n필요한 정보를 입력해주세요'}</Title>
        <UserInfo />
      </UserForm>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const UserForm = styled.div`
  width: 350px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  white-space: pre-line;
  font-size: 18px;
  font-weight: 800;
  margin-top: 30px;
  margin-bottom: 20px;
`;
