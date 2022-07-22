import React from 'react';
import styled from 'styled-components';
import MenuBar from './menuBar';

export default function Admin() {
  return (
    <Wrapper>
      <Header>AI 학습용 교통 데이터 수집을 위한 클라우드 워커 지원 현황</Header>
      <MenuBar />
      {/* table */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 10px 30px;
`;

const Header = styled.header`
  font-weight: 700;
  font-size: 24px;
  margin-top: 30px;
`;
