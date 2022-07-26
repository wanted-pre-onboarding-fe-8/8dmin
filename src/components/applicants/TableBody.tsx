import React from 'react';
import MuiTableBody from '@mui/material/TableBody';
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
