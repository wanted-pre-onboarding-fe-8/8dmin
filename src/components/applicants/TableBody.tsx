import React from 'react';
import MuiTableBody from '@mui/material/TableBody';
import TableRow from './TableRow';
import { MockApplicant } from '../../mocks/status/type';
interface TableBodyProps {
  applicants: MockApplicant[];
}

function TableBody({ applicants }: TableBodyProps) {
  return (
    <MuiTableBody>
      {applicants.map((applicant) => {
        return <TableRow key={applicant.id} applicant={applicant} />;
      })}
    </MuiTableBody>
  );
}

export default TableBody;
