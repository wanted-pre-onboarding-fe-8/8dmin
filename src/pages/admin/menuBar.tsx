import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const selectOptions = ['지원날짜', '지원자명', '성별', '생년월일', '이용수단', '거주지'];

export default function MenuBar() {
  const [select, setSelect] = React.useState('지원날짜');

  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value);
  };

  return (
    <Wrapper>
      <Paper
        component='form'
        variant='outlined'
        sx={{
          p: '0px 5px',
          display: 'flex',
          alignItems: 'center',
          width: 400,
          borderRadius: 4,
          border: '2px solid #8d9bae',
        }}
      >
        <FormControl variant='standard' sx={{ ml: 1, minWidth: 85 }} size='small'>
          <Select
            disableUnderline
            value={select}
            name={'select'}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{
              pt: 1,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {selectOptions &&
              selectOptions.map((selectOption) => (
                <MenuItem key={selectOption} value={selectOption}>
                  {selectOption}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <Divider sx={{ height: 23, backgroundColor: '#8d9bae' }} orientation='vertical' />
        <InputBase sx={{ ml: 1, flex: 1 }} />
        <IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
          <SearchIcon />
        </IconButton>
      </Paper>
      <Button variant='contained' sx={{ p: '2px 40px', borderRadius: 4 }}>
        엑셀 다운로드
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;
