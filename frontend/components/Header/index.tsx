import MyLogo from '../../src/UI/MyImage';
import LoginBlock from './LoginBlock';
import { Flex } from '../../src/ContentManager/Content';
import styled from 'styled-components';
import Link from 'next/link';

const Header = (): JSX.Element => {
  const FlexShapka = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;
    color: var(--text-white);
  `;

  const Spisocheck = styled.ul`
    display: flex;
    width: 70%;
    flex-direction: row;
    justify-content: space-between;
    margin-right: -3rem;
    li {
      font-size: large;
    }
  `;

  return (
    <Flex style={{ backgroundColor: '#000', height: '5rem' }}>
      <FlexShapka style={{ alignItems: 'center' }}>
        <Flex
          style={{
            alignItems: 'center',
            width: '70%',
            justifyContent: 'space-between',
          }}
        >
          <MyLogo text={'CodeWear'} size="large" type="absolute" />
          <Spisocheck>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/asdf">sadf</Link>
            </li>
            <li>
              <Link href="/afdsf">fdfsa</Link>
            </li>
          </Spisocheck>
        </Flex>
        <LoginBlock />
      </FlexShapka>
    </Flex>
  );
};

export default Header;
