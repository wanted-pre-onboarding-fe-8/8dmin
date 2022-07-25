import React from 'react';
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
import { styled } from '@mui/system';
interface TabProps {
  length: number;
}

function Tab({ length }: TabProps) {
  const tabList = createTabList(length);

  const [tabIndex, setTabIndex] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newTabIndex: number) => {
    setTabIndex(newTabIndex);
  };

  return (
    <MuiTabs
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
  min-width: 160px;
`;
