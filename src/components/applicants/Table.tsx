import React from 'react';
import MuiTable from '@mui/material/Table';
import MuiTableBody from '@mui/material/TableBody';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableContainer from '@mui/material/TableContainer';
import MuiTableHead from '@mui/material/TableHead';
import MuiTableRow from '@mui/material/TableRow';
import MuiPaper from '@mui/material/Paper';
import MuiCheckbox from '@mui/material/Checkbox';
import { TABLE_HEAD_LABELS } from '../../utils/constants/table';

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
            return (
              <MuiTableRow key={applicant.id}>
                <MuiTableCell align='center'>{applicant.id}</MuiTableCell>
                <MuiTableCell align='center'>{applicant.appliedAt}</MuiTableCell>
                <MuiTableCell align='center'>{applicant.name}</MuiTableCell>
                <MuiTableCell align='center'>{applicant.sex}</MuiTableCell>
                <MuiTableCell align='center'>{applicant.dateOfBirth}</MuiTableCell>
                <MuiTableCell align='center'>{applicant.phone}</MuiTableCell>
                <MuiTableCell align='center'>{applicant.email}</MuiTableCell>
                <MuiTableCell align='center'>{applicant.mobility}</MuiTableCell>
                <MuiTableCell align='center'>{applicant.region}</MuiTableCell>
                <MuiTableCell align='center'>
                  <MuiCheckbox checked={applicant.accepted} />
                </MuiTableCell>
              </MuiTableRow>
            );
          })}
        </MuiTableBody>
      </MuiTable>
    </MuiTableContainer>
  );
}

export default Table;
