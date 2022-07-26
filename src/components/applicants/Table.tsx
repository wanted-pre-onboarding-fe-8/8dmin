import React from 'react';
import MuiTable from '@mui/material/Table';
import MuiTableContainer from '@mui/material/TableContainer';
import MuiPaper from '@mui/material/Paper';
import TableHead from './TableHead';
import TableBody from './TableBody';
import { MockApplicant } from '../../mocks/status/type';
interface TableProps {
  applicants: MockApplicant[];
}

function Table({ applicants }: TableProps) {
  return (
    <MuiTableContainer component={MuiPaper}>
      <MuiTable sx={{ minWidth: 650 }} aria-label='applicants status table'>
        <TableHead />
        <TableBody applicants={applicants} />
      </MuiTable>
    </MuiTableContainer>
  );
}

export default Table;
