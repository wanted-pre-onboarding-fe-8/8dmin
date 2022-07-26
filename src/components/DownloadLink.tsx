import React from 'react';
import styled from 'styled-components';
import { FILE_NAME, TABLE_HEAD_LABELS } from '../utils/constants/table';

// interface DownloadLinkProps {
//   data: {
//     num: number;
//     date: string;
//     name: string;
//     sex: '남' | '여';
//     birth: string;
//     phone: string;
//     email: string;
//     transport: string[];
//     residence: string;
//     status: boolean;
//   }[];
// }

function DownloadLink() {
  const linkRef = React.useRef<HTMLAnchorElement>(null);
  const data = [
    {
      num: 1,
      date: '2022-07-01',
      name: '추연빈',
      sex: '남',
      birth: '2222-11-11',
      phone: '010-1234-5678',
      email: 'cndusqls98@naver.com',
      transport: ['버스'],
      residence: '경기도',
      status: true,
    },
    {
      num: 2,
      date: '2022-07-01',
      name: '추연빈',
      sex: '남',
      birth: '2222-11-11',
      phone: '010-1234-5678',
      email: 'cndusqls98@naver.com',
      transport: ['버스'],
      residence: '경기도',
      status: true,
    },
    {
      num: 3,
      date: '2022-07-01',
      name: '추연빈',
      sex: '남',
      birth: '2222-11-11',
      phone: '010-1234-5678',
      email: 'cndusqls98@naver.com',
      transport: ['버스', '택시', '자동차'],
      residence: '경기도',
      status: true,
    },
  ];

  const handleClick = () => {
    let csvString = TABLE_HEAD_LABELS.join(',') + '\n';

    data.forEach((value) => {
      csvString += `${value.num},${value.date},${value.name},${value.sex},${value.birth},${
        value.phone
      },${value.email},${value.transport.join(' ')},${value.residence},${value.status}\r\n`;

      const blob = new Blob(['\uFEFF' + csvString], { type: 'text/csv;charset=utf-8' });
      const url = URL.createObjectURL(blob);

      if (linkRef.current) {
        linkRef.current.href = url;
      }
    });
  };

  return (
    <Link onClick={handleClick} ref={linkRef} download={FILE_NAME}>
      엑셀 다운로드
    </Link>
  );
}

const Link = styled.a`
  text-decoration: none;
  color: white;
`;

export default DownloadLink;
