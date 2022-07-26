import React from 'react';
import MuiTableHead from '@mui/material/TableHead';
import MuiTableRow from '@mui/material/TableRow';
import MuiTableCell from '@mui/material/TableCell';
import { TABLE_HEAD_LABELS } from '../../utils/constants/table';

function TableHead() {
  return (
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
  );
}

export default TableHead;
