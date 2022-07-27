import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const admin = {
  id: 'admin',
  password: '1234',
};

export default function Login() {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleIdChange = (event: ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (id != admin.id || password != admin.password) {
      alert('아이디 또는 비밀번호가 틀립니다.');
      return;
    }

    navigate('/admin', { state: { id, password } });
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Container sx={{ p: 8, pt: 5, pb: 5 }}>
          <Typography sx={{ pb: 2 }}>관리자 로그인</Typography>
          <TextField
            type='text'
            label='로그인'
            variant='outlined'
            autoComplete='off'
            size='small'
            sx={{ mb: 1 }}
            value={id}
            onChange={handleIdChange}
          />
          <TextField
            type='password'
            label='패스워드'
            variant='outlined'
            autoComplete='off'
            size='small'
            sx={{ mb: 1 }}
            value={password}
            onChange={handlePasswordChange}
          />
          <Button variant='contained' type='submit'>
            로그인
          </Button>
        </Container>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
`;

const Form = styled.form`
  min-width: 400px;
  background-color: white;
  border-radius: 12px;
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
`;
