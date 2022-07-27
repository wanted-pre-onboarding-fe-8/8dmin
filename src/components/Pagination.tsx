import React from 'react';
import { useRecoilState } from 'recoil';
import { pageState } from '../store';
import MuiPagination from '@mui/material/Pagination';
import styled from 'styled-components';

interface PaginationProps {
  maxPage: number;
}

function Pagination({ maxPage }: PaginationProps) {
  const [page, setPage] = useRecoilState(pageState);

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
