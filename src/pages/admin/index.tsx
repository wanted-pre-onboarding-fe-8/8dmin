import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MenuBar from './menuBar';
import Status from '../../components/applicants/Status';
import Pagination from '../../components/Pagination';

import { useRecoilState, useRecoilValue } from 'recoil';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  keywordState,
  seriesState,
  applicantSelector,
  searchSelector,
  allApplicantState,
  pagingSelector,
} from '../../store';

import { format } from 'date-fns';
import RefreshIcon from '@mui/icons-material/Refresh';

import mockdata from '../../mocks/applicant.json';

export default function Admin() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.state) {
      alert('접근 권한이 없습니다.');
      navigate('/');
    }
    renewal();
  }, []);

  const series = useRecoilValue(seriesState);
  const [, setAllApplicants] = useRecoilState(allApplicantState);

  const keyword = useRecoilValue(keywordState);
  const seriesSelect = applicantSelector(series);
  const searchSelect = searchSelector({ applicants: seriesSelect });
  const pagedSearchResult = pagingSelector({ applicants: searchSelect });
  const searchResult = useRecoilValue(pagedSearchResult);

  const pagedApplicants = useRecoilValue(pagingSelector({ applicants: seriesSelect }));

  const [renewalDate, setRenewalDate] = useState('');
  const renewal = () => {
    setAllApplicants(mockdata.applicants);
    const nowTime = getRenewalDate();
    setRenewalDate(nowTime);
  };

  return (
    <Wrapper>
      <Header>AI 학습용 교통 데이터 수집을 위한 클라우드 워커 지원 현황</Header>
      <RenewalWrapper onClick={() => renewal()}>
        <RenewalTimeText>{renewalDate}</RenewalTimeText>
        <RenewalButton>hello</RenewalButton>
      </RenewalWrapper>
      <MenuBar />
      {keyword ? <Status applicants={searchResult} /> : <Status applicants={pagedApplicants} />}
      <Pagination />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  padding: 10px 30px;
  margin-top: 65px;
  flex-grow: 1;
  height: 100%;
`;

const Header = styled.header`
  font-weight: 700;
  font-size: 24px;
  margin-top: 30px;
`;

function getRenewalDate() {
  const now = new Date();
  return 'new : ' + format(now, 'hh시 mm분 ss초');
}
const RenewalWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 33px;
  right: 30px;
  background-color: #1975d2;
  padding: 10px 15px 10px 15px;
  border-radius: 15px;
  cursor: pointer;
`;
const RenewalTimeText = styled.p`
  color: white;
  margin-right: 10px;
  font-size: 14px;
`;
const RenewalButton = styled(RefreshIcon)`
  color: white;
`;
