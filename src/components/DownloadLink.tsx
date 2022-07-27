import React from 'react';
import styled from 'styled-components';
import { FILE_NAME, TABLE_HEAD_LABELS } from '../utils/constants/table';
import { useRecoilValue } from 'recoil';
import { seriesState } from '../store/atoms';
import { applicantSelector, sortApplicantSelector } from '../store';
import searchSelector from '../store/searchSelector';
import { ORDER_CONSTANTS } from '../utils/constants/data';

export default function DownloadLink() {
  const linkRef = React.useRef<HTMLAnchorElement>(null);
  const series = useRecoilValue(seriesState);

  const seriesSelect = applicantSelector(series);
  const searchSelect = searchSelector({ applicants: seriesSelect });
  const sortSelect = sortApplicantSelector({
    applicants: searchSelect,
    order: ORDER_CONSTANTS.ORDER_ID,
  });

  const applicants = useRecoilValue(sortSelect);

  const handleClick = () => {
    let csvString = TABLE_HEAD_LABELS.join(',') + '\n';

    applicants.forEach((value, index) => {
      csvString += `${index + 1},${value.appliedAt},${value.name},${value.gender},${
        value.dateOfBirth
      },${value.phone},${value.email},${value.transportation.join(' ')},${value.region},${
        value.accepted
      }\r\n`;

      const blob = new Blob(['\uFEFF' + csvString], { type: 'text/csv;charset=utf-8' });
      const url = URL.createObjectURL(blob);

      if (linkRef.current) {
        linkRef.current.href = url;
      }
    });
  };

  return (
    <Link onClick={handleClick} ref={linkRef} download={`${FILE_NAME} ${series}차.csv`}>
      엑셀 다운로드
    </Link>
  );
}

const Link = styled.a`
  text-decoration: none;
  color: white;
`;
