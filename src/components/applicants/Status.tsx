import React from 'react';
import Tab from './Tab';
import Table from './Table';
import styled from 'styled-components';
import { MOCK_SERIES_COUNT, MOCK_APPLICANTS } from '../../mocks/status/table';

function Status() {
  const MOCK_SELECTED_TAB = 1;
  const filteredApplicants = MOCK_APPLICANTS.filter(
    (applicant) => applicant.series === MOCK_SELECTED_TAB,
  );
  return (
    <Container>
      <Tab length={MOCK_SERIES_COUNT} />
      <Table applicants={filteredApplicants} />
    </Container>
  );
}

export default Status;

const Container = styled.section``;
