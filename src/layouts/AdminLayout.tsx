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
      <Outlet />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;
