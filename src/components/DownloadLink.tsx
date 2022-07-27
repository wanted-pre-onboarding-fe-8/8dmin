import React from 'react';
import styled from 'styled-components';
import { MockCandidates } from '../store/types';
import { FILE_NAME, TABLE_HEAD_LABELS } from '../utils/constants/table';

interface DownloadLinkProps {
  applicant: MockCandidates;
}

function DownloadLink({ applicant }: DownloadLinkProps) {
  const linkRef = React.useRef<HTMLAnchorElement>(null);

  const handleClick = () => {
    let csvString = TABLE_HEAD_LABELS.join(',') + '\n';

    applicant.forEach((value) => {
      csvString += `${value.id},${value.appliedAt},${value.name},${value.gender},${
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
