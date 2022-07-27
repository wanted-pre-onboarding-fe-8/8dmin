import React from 'react';
import MuiTableRow from '@mui/material/TableRow';
import MuiTableCell from '@mui/material/TableCell';
import MuiCheckbox from '@mui/material/Checkbox';
import { MockCandidate } from '../../store/types';
interface TableRowProps {
  applicant: MockCandidate & { number: number };
}

function TableRow({ applicant }: TableRowProps) {
  return (
    <MuiTableRow key={applicant.id}>
      <MuiTableCell align='center'>{applicant.number}</MuiTableCell>
      <MuiTableCell align='center'>{applicant.appliedAt}</MuiTableCell>
      <MuiTableCell align='center'>{applicant.name}</MuiTableCell>
      <MuiTableCell align='center'>{applicant.gender}</MuiTableCell>
      <MuiTableCell align='center'>{applicant.dateOfBirth}</MuiTableCell>
      <MuiTableCell align='center'>{applicant.phone}</MuiTableCell>
      <MuiTableCell align='center'>{applicant.email}</MuiTableCell>
      <MuiTableCell align='center'>{applicant.transportation}</MuiTableCell>
      <MuiTableCell align='center'>{applicant.region}</MuiTableCell>
      <MuiTableCell align='center'>
        <MuiCheckbox checked={applicant.accepted} />
      </MuiTableCell>
    </MuiTableRow>
  );
}

export default TableRow;
