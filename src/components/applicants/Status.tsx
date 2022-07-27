import React from 'react';
import Tab from './Tab';
import Table from './Table';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  applicantsBySeries,
  pageState,
  rowsPerPageState,
  totalApplicantsCount,
  totalSeriesCountState,
} from '../../mocks/status/recoil';
import { Pagination } from '@mui/material';

function Status() {
  const totalSeriesCount = useRecoilValue(totalSeriesCountState);
  const applicantCount = useRecoilValue(totalApplicantsCount);
  const [applicants, setApplicants] = useRecoilState(applicantsBySeries);
  const [page, setPage] = useRecoilState(pageState);
  const rowsPerPage = useRecoilValue(rowsPerPageState);
  const maxPage = Math.ceil(applicantCount / rowsPerPage);

  const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  return (
    <Container>
      <Tab length={totalSeriesCount} />
      <Table applicants={applicants} />
      <StyledPagination
        count={maxPage}
        page={page}
        onChange={handleChangePage}
        variant='outlined'
        shape='rounded'
      />
    </Container>
  );
}

export default Status;

const Container = styled.section`
  width: 100%;
  margin-top: 24px;
`;
const StyledPagination = styled(Pagination)`
  width: 100%;
  margin-top: 24px;
  & > ul:first-child {
    justify-content: center;
  }
`;
