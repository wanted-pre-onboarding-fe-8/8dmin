import React from 'react';
import MuiTableBody from '@mui/material/TableBody';
import TableRow from './TableRow';
import { MockCandidate } from '../../store/types';
interface TableBodyProps {
  applicants: MockCandidate[];
}

function TableBody({ applicants }: TableBodyProps) {
  return (
    <MuiTableBody>
      {applicants.map((applicant, index) => {
        const numberedApplicant = { ...applicant, number: index + 1 };
        return <TableRow key={applicant.id} applicant={numberedApplicant} />;
      })}
    </MuiTableBody>
  );
}

export default TableBody;
