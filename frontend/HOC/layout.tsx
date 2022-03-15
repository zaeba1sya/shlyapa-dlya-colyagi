import type { NextPage } from 'next';

import Footer from '../components/Footer';
import Header from '../components/Header';
import { ILayoutProps } from '../interfaces/interfaces';

const Layout: NextPage<ILayoutProps> = ({
  children,
  type = 'index',
}: ILayoutProps) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      {type !== 'index' ? <Footer /> : null}
    </>
  );
};

export default Layout;
