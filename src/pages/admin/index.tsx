import React from 'react';
import styled from 'styled-components';
import MenuBar from './menuBar';
import Status from '../../components/applicants/Status';

export default function Admin() {
  return (
    <Wrapper>
      <Header>AI 학습용 교통 데이터 수집을 위한 클라우드 워커 지원 현황</Header>
      <MenuBar />
      <Status />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 10px 30px;
  margin-top: 65px;
  flex-grow: 1;
  height: 100%;
`;

const Header = styled.header`
  font-weight: 700;
  font-size: 24px;
  margin-top: 30px;
`;
