import React from 'react';
import Tab from './Tab';
import Table from './Table';
import styled from 'styled-components';
import { LATEST_SERIES_COUNT } from '../../utils/constants/table';
import { MockCandidate } from '../../store/types';

interface StatusProps {
  applicants: MockCandidate[];
}

function Status({ applicants }: StatusProps) {
  return (
    <Container>
      <Tab length={LATEST_SERIES_COUNT} />
      <Table applicants={applicants} />
    </Container>
  );
}

export default Status;

const Container = styled.section`
  width: 100%;
  margin-top: 24px;
`;
