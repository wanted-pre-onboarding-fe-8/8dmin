import React from 'react';
import MuiTable from '@mui/material/Table';
import MuiTableBody from '@mui/material/TableBody';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableContainer from '@mui/material/TableContainer';
import MuiTableHead from '@mui/material/TableHead';
import MuiTableRow from '@mui/material/TableRow';
import MuiPaper from '@mui/material/Paper';
import { TABLE_HEAD_LABELS } from '../../utils/constants/table';
import TableRow from './TableRow';

interface MockApplicant {
  id: number;
  series: number;
  appliedAt: string;
  name: string;
  sex: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  mobility: string;
  region: string;
  accepted: boolean;
}

interface TableProps {
  applicants: MockApplicant[];
}

function Table({ applicants }: TableProps) {
  return (
    <MuiTableContainer component={MuiPaper}>
      <MuiTable sx={{ minWidth: 650 }} aria-label='applicants status table'>
        <MuiTableHead>
          <MuiTableRow>
            {TABLE_HEAD_LABELS.map((label, index) => {
              return (
                <MuiTableCell key={index} align='center'>
                  {label}
                </MuiTableCell>
              );
            })}
          </MuiTableRow>
        </MuiTableHead>
        <MuiTableBody>
          {applicants.map((applicant) => {
            return <TableRow key={applicant.id} applicant={applicant} />;
          })}
        </MuiTableBody>
      </MuiTable>
    </MuiTableContainer>
  );
}

export default Table;
