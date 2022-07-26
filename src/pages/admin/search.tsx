import React from 'react';
import styled from 'styled-components';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { SELECT_OPTIONS_CONTANST } from '../../utils/constants/application';
import { DATE_VALIDATION } from '../../utils/input/validation';

export default function Search() {
  const [select, setSelect] = React.useState('dateOfApply');
  const [input, setInput] = React.useState('');
  const [keyword, setKeyword] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setInput('');
    setSelect(event.target.value);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setKeyword(input);
  };

  const onChange = (event: SelectChangeEvent) => {
    const { value, name } = event.target;
    if (name === 'dateOfApply' || name === 'dateOfBirth') {
      if (!DATE_VALIDATION.test(event.target.value)) {
        return;
      }
      setInput(event.target.value);
    }
    setInput(value);
  };

  const InputField: any = {
    dateOfApply: (
      <Input
        name='dateOfApply'
        type='string'
        onChange={onChange}
        value={input}
        placeholder='YYYYMMDD'
      />
    ),
    name: <Input name='name' type='string' onChange={onChange} value={input} placeholder='이름' />,
    gender: (
      <Input
        name='gender'
        type='string'
        onChange={onChange}
        value={input}
        placeholder='여자, 남자로 입력하세요.'
      />
    ),
    dateOfBirth: (
      <Input
        name='dateOfBirth'
        type='string'
        onChange={onChange}
        value={input}
        placeholder='YYYYMMDD'
      />
    ),
    transport: (
      <Input
        name='transport'
        type='string'
        onChange={onChange}
        value={input}
        placeholder='버스, 지하철, 택시, KTX/기차, 도보, 자전거, 전동 킥보드, 자가용'
      />
    ),
    address: (
      <Input name='address' onChange={onChange} value={input} type='string' placeholder='시군구' />
    ),
  };

  return (
    <>
      <Paper
        onSubmit={onSubmit}
        component='form'
        variant='outlined'
        sx={{
          p: '0px 5px',
          display: 'flex',
          alignItems: 'center',
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
            sx={{
              pt: 0.5,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {SELECT_OPTIONS_CONTANST &&
              SELECT_OPTIONS_CONTANST.map((select) => (
                <MenuItem key={select.key} value={select.key}>
                  {select.value}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <Divider />
        <InputDiv>{InputField[select]}</InputDiv>
        <IconButton sx={{ p: '10px' }} type='submit' aria-label='search'>
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
}

const InputDiv = styled.div`
  width: 360px;
  margin: 1p;
  padding: 4px 10px;
`;

const Divider = styled.div`
  height: 23px;
  border: 1px solid #8d9bae;
`;

const Input = styled.input`
  border: 0;
  font-size: 14px;
  height: 24px;
  width: 100%;
  &:focus {
    outline: none;
  }
`;
