import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Search from './search';
import DownloadLink from '../../components/DownloadLink';

export default function MenuBar() {
  return (
    <>
      <Wrapper>
        <Search />
        <Button variant='contained' sx={{ p: '2px 40px', borderRadius: 4 }}>
          <DownloadLink />
        </Button>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;
