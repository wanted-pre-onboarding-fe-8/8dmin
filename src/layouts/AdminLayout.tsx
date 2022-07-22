import * as React from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';
import HeaderBar from '../components/HeaderBar';
import SideBar from '../components/SideBar';

export default function AdminLayout() {
  return (
    <Wrapper>
      <HeaderBar />
      <SideBar />
      <Container>
        <Outlet />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const Container = styled.div`
  margin-top: 65px;
  flex-grow: 1;
  height: 100%;
  overflow: auto;
`;
