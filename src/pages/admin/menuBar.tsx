import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Search from './search';
import DownloadLink from '../../components/DownloadLink';
import DetailSearch from './detailSearch';

export default function MenuBar() {
  const [active, setActive] = React.useState(false);

  const onActiveChange = () => {
    setActive(!active);
  };

  return (
    <>
      <Wrapper>
        <Search onActiveChange={onActiveChange} active={active} />
        <Button variant='contained' sx={{ p: '2px 40px', borderRadius: 4 }}>
          <DownloadLink />
        </Button>
      </Wrapper>
      {active && <DetailSearch />}
    </>
  );
}

const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;
