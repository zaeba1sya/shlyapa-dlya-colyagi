import { Flex } from '../../src/ContentManager/Content';
import MyImage from '../../src/UI/MyImage';
import styled from 'styled-components';

const text = styled.h3`
  font-size: medium;
  color: var(--text-white);
  margin-right: 1rem;
`;

const LoginBlock = (): JSX.Element => {
  return (
    <Flex direction="row">
      <text
        style={{
          marginRight: '.5rem',
          paddingRight: '.5rem',
          borderRight: '1px solid #fff',
        }}
      >
        Login
      </text>
      <text>Cart / $12.3</text>
    </Flex>
  );
};

export default LoginBlock;
