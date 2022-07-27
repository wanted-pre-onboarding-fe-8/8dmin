import React, { useEffect } from 'react';
import styled from 'styled-components';
import MenuBar from './menuBar';
import Status from '../../components/applicants/Status';

import mockdata from '../../mocks/applicant.json';
import { ORDER_CONSTANTS } from '../../utils/constants/data';
import { MockCandidates } from '../../store/types';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  allApplicantState,
  seriesState,
  pageState,
  applicantSelector,
  searchSelector,
  sortApplicantSelector,
  pageNationSelector,
} from '../../store';
import { useLocation, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const location = useLocation();

  const [applicants, setApplicants] = useRecoilState<MockCandidates | any>(allApplicantState);
  const [series, setSeries] = useRecoilState<number>(seriesState);
  const [page, setPage] = useRecoilState<number>(pageState);
  const [order, setOrder] = React.useState<string>(ORDER_ID);

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
    if (!location.state) {
      alert('접근 권한이 없습니다.');
      navigate('/');
    }
  }, []);

  useEffect(() => {
    setApplicants(mockdata.applicants);
  }, []);
  return (
    <Wrapper>
      <Header>AI 학습용 교통 데이터 수집을 위한 클라우드 워커 지원 현황</Header>
      <MenuBar />
      <Status />
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
