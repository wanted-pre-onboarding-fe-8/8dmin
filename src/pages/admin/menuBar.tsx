import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
<<<<<<< HEAD
import Search from './search';
import DownloadLink from '../../components/DownloadLink';

export default function MenuBar() {
=======
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import { useRecoilState } from 'recoil';
import { selectState } from '../../store';

const selectOptions = ['지원날짜', '지원자명', '성별', '생년월일', '이용수단', '거주지'];

export default function MenuBar() {
  const [select, setSelect] = React.useState('지원날짜');
  const [selecState, setSelectState] = useRecoilState(selectState);

  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value);
    setSelectState(event.target.value);
  };

>>>>>>> e2e904a (feat: menuBar에 select전역 데이터 적용)
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
