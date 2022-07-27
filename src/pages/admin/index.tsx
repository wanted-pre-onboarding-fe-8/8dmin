import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import MenuBar from './menuBar';
import mockdata from '../../mocks/applicant.json';
import { ORDER_CONSTANTS } from '../../utils/constants/data';
import { MockCandidates } from '../../store/types';
import {
  allApplicantState,
  seriesState,
  pageState,
  applicantSelector,
  searchSelector,
  sortApplicantSelector,
  pageNationSelector,
} from '../../store';

const {
  ORDER_ID,
  ORDER_NAME,
  ORDER_APPLIED_AT,
  ORDER_GENDER,
  ORDER_BIRTH,
  ORDER_EMAIL,
  ORDER_REGION,
} = ORDER_CONSTANTS;

export default function Admin() {
  const [applicants, setApplicants] = useRecoilState<MockCandidates | any>(allApplicantState);
  const [series, setSeries] = useRecoilState<number>(seriesState);
  const [page, setPage] = useRecoilState<number>(pageState);
  const [order, setOrder] = useState<string>(ORDER_ID);

  const seriesSelect = applicantSelector(series);
  const searchSelect = searchSelector({ applicants: seriesSelect });
  const sortSelect = sortApplicantSelector({ applicants: searchSelect, order: order });
  const pageSelect = pageNationSelector({ applicants: sortSelect });
  const sortedApplicants = useRecoilValue(sortSelect);
  const pagedApplicants = useRecoilValue(pageSelect);

  const pageRange = Math.ceil(sortedApplicants.length / 10);

  const handleSeriesClick = (series: React.SetStateAction<number>) => {
    setSeries(series);
    setPage(1);
  };
  const handleSortedClick = (orderKey: React.SetStateAction<string>) => {
    setOrder(orderKey);
  };
  const handlePageClick = (page: React.SetStateAction<number>) => {
    setPage(page);
  };

  const PageList = () => {
    const pageNumber = [];
    for (let i = 1; i <= pageRange; i++) {
      pageNumber.push(
        <button key={i} onClick={() => handlePageClick(i)}>
          {i}
        </button>,
      );
    }
    return pageNumber;
  };

  useEffect(() => {
    setApplicants(mockdata.applicants);
  }, []);
  return (
    <Wrapper>
      <Header>AI 학습용 교통 데이터 수집을 위한 클라우드 워커 지원 현황</Header>
      <MenuBar />
      {/* table */}
      <br />
      <button onClick={() => handleSeriesClick(1)}>1차 모집</button>
      <button onClick={() => handleSeriesClick(2)}>2차 모집</button>
      <br />
      <button onClick={() => handleSortedClick(ORDER_ID)}>전체</button>
      <button onClick={() => handleSortedClick(ORDER_NAME)}>이름</button>
      <button onClick={() => handleSortedClick(ORDER_APPLIED_AT)}>지원날짜</button>
      <button onClick={() => handleSortedClick(ORDER_GENDER)}>성별</button>
      <button onClick={() => handleSortedClick(ORDER_BIRTH)}>생년월일</button>
      <br />
      <span>
        {pagedApplicants.map(
          (applicant) =>
            `이름: ${applicant.name} 지원날짜 : ${applicant.appliedAt}  성별 : ${applicant.gender}  생년월일: ${applicant.dateOfBirth} 운송수단: ${applicant.transportation}  지역:${applicant.region} |`,
        )}
      </span>
      <div>{PageList()}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
