import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import MenuBar from './menuBar';
import mockdata from '../../mocks/applicant.json';
import { ORDER_CONSTANTS } from '../../utils/constants/data';
import { MockCandidates } from '../../store/types';
import {
  allCandidateState,
  seriesState,
  candidateSelector,
  searchSelector,
  sortCandidateSelector,
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
  const [applicants, setApplicants] = useRecoilState<MockCandidates | any>(allCandidateState);
  const [series, setSeries] = useRecoilState<number>(seriesState);
  const [page, setPage] = useState<number>(1);
  const [order, setOrder] = useState<string>(ORDER_ID);
  const sortCandidates = useRecoilValue(
    sortCandidateSelector({
      candidates: searchSelector({
        candidates: candidateSelector(series),
      }),
      order: order,
    }),
  );
  const pageRange = Math.ceil(sortCandidates.length / 10);
  const pageNationCandidates = useRecoilValue(
    pageNationSelector({
      candidates: sortCandidateSelector({
        candidates: searchSelector({
          candidates: candidateSelector(series),
        }),
        order: order,
      }),
      page: page,
    }),
  );

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
  const handlePage = () => {
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

  console.log('pageNationCandidate', pageNationCandidates);
  return (
    <Wrapper>
      <Header>AI 학습용 교통 데이터 수집을 위한 클라우드 워커 지원 현황</Header>
      <MenuBar />
      {/* table */}
      <br />
      <br />
      <button onClick={() => handleSeriesClick(1)}>1차 모집</button>
      <button onClick={() => handleSeriesClick(2)}>2차 모집</button>
      <br />
      <br />
      <button onClick={() => handleSortedClick(ORDER_ID)}>전체</button>
      <button onClick={() => handleSortedClick(ORDER_NAME)}>이름</button>
      <button onClick={() => handleSortedClick(ORDER_APPLIED_AT)}>지원날짜</button>
      <button onClick={() => handleSortedClick(ORDER_GENDER)}>성별</button>
      <button onClick={() => handleSortedClick(ORDER_BIRTH)}>생년월일</button>
      <br />
      <br />
      <span>{pageNationCandidates.map((candidate) => `${candidate.name} `)}</span>
      <div>{handlePage()}</div>
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
