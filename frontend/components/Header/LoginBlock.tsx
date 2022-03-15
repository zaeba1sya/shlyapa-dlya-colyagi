import { Flex } from '../../src/ContentManager/Content';
import MyImage from '../../src/UI/MyImage';
import styled from 'styled-components';

const LoginBlock = (): JSX.Element => {
  const text = styled.h3`
    font-size: medium;
    color: var(--text-white);
  `;
  return (
    <Flex>
      <text>Login</text>
      <text>Cart / $12.3</text>
    </Flex>
  );
};

export default LoginBlock;
