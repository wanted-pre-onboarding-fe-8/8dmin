import React from 'react';
import Tab from './Tab';
import Table from './Table';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  totalSeriesCountState,
  selectedSeriesState,
  applicantsBySeries,
} from '../../mocks/status/recoil';

function Status() {
  const [totalSeriesCount] = useRecoilState(totalSeriesCountState);
  const [selectedSeries] = useRecoilState(selectedSeriesState);
  const applicants = useRecoilValue(applicantsBySeries(selectedSeries));

  return (
    <Container>
      <Tab length={totalSeriesCount} />
      <Table applicants={applicants} />
    </Container>
  );
}

export default Status;

const Container = styled.section``;
