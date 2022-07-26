import React from 'react';
import MuiTableRow from '@mui/material/TableRow';
import MuiTableCell from '@mui/material/TableCell';
import MuiCheckbox from '@mui/material/Checkbox';

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

interface TableRowProps {
  applicant: MockApplicant;
}

function TableRow({ applicant }: TableRowProps) {
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
}

export default TableRow;
