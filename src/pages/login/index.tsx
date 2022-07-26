import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import styled from 'styled-components';

export default function Login() {
  return (
    <Wrapper>
      <Form>
        <Container sx={{ p: 8, pt: 5, pb: 5 }}>
          <Typography sx={{ pb: 2 }}>관리자 로그인</Typography>
          <TextField
            type='text'
            id='outlined-basic'
            label='로그인'
            variant='outlined'
            autoComplete='off'
            size='small'
            sx={{ mb: 1 }}
          />
          <TextField
            type='password'
            id='outlined-basic'
            label='패스워드'
            variant='outlined'
            autoComplete='off'
            size='small'
            sx={{ mb: 1 }}
          />
          <Button variant='contained'>로그인</Button>
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
