import MyImage from '../../src/UI/MyImage';
import LoginBlock from './LoginBlock';
import { Flex } from '../../src/ContentManager/Content';
import styled from 'styled-components';

const Header = (): JSX.Element => {
  const header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;
  `;

  return (
    <header>
      <MyImage />
      <Flex>
        <ul>
          <li>Text</li>
          <li>Text</li>
          <li>Text</li>
          <li>Text</li>
        </ul>
      </Flex>
      <LoginBlock />
    </header>
  );
};

export default Header;
