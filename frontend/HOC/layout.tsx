import type { NextPage } from 'next';
import styled from 'styled-components';

import Footer from '../components/Footer';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

import { ILayoutProps } from '../interfaces/interfaces';
import { Flex } from '../src/ContentManager/Content';

const Layout: NextPage<ILayoutProps> = ({ children }: ILayoutProps) => {
  return (
    <>
      <Header />
      <Flex align="flex-start" style={{ width: '80%', margin: '3rem auto' }}>
        <SideBar />
        {children}
      </Flex>
      <Footer />
    </>
  );
};

export default Layout;
