import React from 'react';
import { CSVLink } from 'react-csv';

interface CsvProps {
  headers: { label: string; key: string }[];
  data: {
    num: number;
    date: string;
    name: string;
    sex: '남' | '여';
    brith: string;
    phone: string;
    email: string;
    vehicle: string[];
    residence: string;
    statis: boolean;
  }[];
}

function Csv({ headers, data }: CsvProps) {
  const handleClick = () => {
    const downloadCheck = confirm('엑셀을 다운로드 하시겠습니까?');

    if (!downloadCheck) {
      return false;
    }
  };

  return (
    <CSVLink
      filename='크라우드워커 지원현황.csv'
      headers={headers}
      data={data}
      onClick={handleClick}
    >
      엑셀 다운로드
    </CSVLink>
  );
}

export default Csv;
