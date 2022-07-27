import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { pageState, rowsPerPageState, countApplicantsByCurrentSeries } from '../store';
import MuiPagination from '@mui/material/Pagination';
import styled from 'styled-components';

function Pagination() {
  const [page, setPage] = useRecoilState(pageState);
  const rowsPerPage = useRecoilValue(rowsPerPageState);
  const applicantCount = useRecoilValue(countApplicantsByCurrentSeries);
  const maxPage = Math.ceil(applicantCount / rowsPerPage);

  const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  return (
    <StyledPagination
      count={maxPage}
      page={page}
      onChange={handleChangePage}
      variant='outlined'
      shape='rounded'
    />
  );
}

export default Pagination;

const StyledPagination = styled(MuiPagination)`
  width: 100%;
  margin-top: 24px;
  & > ul:first-child {
    justify-content: center;
  }
`;
