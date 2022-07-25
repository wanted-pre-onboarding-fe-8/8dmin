import React from 'react';
import { CSVLink } from 'react-csv';
import { TABLE_HEADERS } from '../utils/constants/table';

interface CsvProps {
  data: {
    num: number;
    date: string;
    name: string;
    sex: '남' | '여';
    brith: string;
    phone: string;
    email: string;
    vehicle: string | string[];
    residence: string;
    status: boolean;
  }[];
}

function Csv({ data }: CsvProps) {
  const handleClick = () => {
    const downloadCheck = confirm('엑셀을 다운로드 하시겠습니까?');

    if (!downloadCheck) {
      return false;
    }
  };

  return (
    <CSVLink
      filename='크라우드워커 지원현황.csv'
      headers={TABLE_HEADERS}
      data={data}
      onClick={handleClick}
    >
      엑셀 다운로드
    </CSVLink>
  );
}

export default Csv;
