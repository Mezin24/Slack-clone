import styled from 'styled-components';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const Layout = () => {
  return (
    <>
      <Header />
      <AppBody>
        <Sidebar />
        <Outlet />
      </AppBody>
    </>
  );
};
export default Layout;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
