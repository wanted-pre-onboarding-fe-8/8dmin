import React from 'react';
import Tab from './Tab';
import styled from 'styled-components';
import { MOCK_SERIES_COUNT } from '../../mocks/status/table';

function Status() {
  return (
    <Container>
      <Tab length={MOCK_SERIES_COUNT} />
    </Container>
  );
}

export default Status;

const Container = styled.section``;
