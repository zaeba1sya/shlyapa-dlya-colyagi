import MyLogo from '../../src/UI/MyImage';
import LoginBlock from './LoginBlock';
import { Flex } from '../../src/ContentManager/Content';
import styled from 'styled-components';
import List from './List';

const FlexShapka = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
  color: var(--text-white);
`;

const Header = (): JSX.Element => {
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
          <List />
        </Flex>
        <LoginBlock />
      </FlexShapka>
    </Flex>
  );
};

export default Header;
