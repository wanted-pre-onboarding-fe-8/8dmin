import React from 'react';
import { useRecoilState } from 'recoil';
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
import MuiPaper from '@mui/material/Paper';
import { styled } from '@mui/system';
import { seriesState, pageState } from '../../store';
interface TabProps {
  length: number;
}

function Tab({ length }: TabProps) {
  const tabList = createTabList(length);
  const [selectedSeries, setSelectedSeries] = useRecoilState(seriesState);
  const [, setPage] = useRecoilState(pageState);
  const tabIndex = selectedSeries - 1;

  const handleChange = (event: React.SyntheticEvent, tabIndex: number) => {
    const series = tabIndex + 1;
    setSelectedSeries(series);
    setPage(1);
  };

  return (
    <MuiTabs
      component={MuiPaper}
      value={tabIndex}
      onChange={handleChange}
      variant='scrollable'
      scrollButtons='auto'
      aria-label='scrollable applicant status tabs'
    >
      {tabList}
    </MuiTabs>
  );
}

function createTabList(length: number) {
  const tabList = [];

  for (let index = 0; index < length; index++) {
    const label = `${index + 1}차 모집`;
    tabList.push(<StyledMuiTab key={index} label={label} />);
  }

  return tabList;
}

export default Tab;

const StyledMuiTab = styled(MuiTab)`
  flex: 1;
`;
