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
} from '../../mocks/status/recoil';
import { LATEST_SERIES_COUNT } from '../../utils/constants/table';
import { Pagination } from '@mui/material';

function Status() {
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
      <Tab length={LATEST_SERIES_COUNT} />
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
