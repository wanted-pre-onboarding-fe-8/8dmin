import React from 'react';
import { useRecoilState } from 'recoil';
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
import MuiPaper from '@mui/material/Paper';
import { styled } from '@mui/system';
import { seriesState } from '../../mocks/status/recoil';
interface TabProps {
  length: number;
}

function Tab({ length }: TabProps) {
  const tabList = createTabList(length);

  const [selectedTabIndex, setSelectedTabIndex] = useRecoilState(seriesState);

  const handleChange = (event: React.SyntheticEvent, newTabIndex: number) => {
    setSelectedTabIndex(newTabIndex);
  };

  return (
    <MuiTabs
      component={MuiPaper}
      value={selectedTabIndex}
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
  min-width: 160px;
`;
