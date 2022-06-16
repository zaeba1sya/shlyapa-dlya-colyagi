import styled from 'styled-components';

const Wrapper = styled.div<{ image?: string }>`
  width: 100vw;
  height: 90vh;
  background: ${(props) => props.image || 'transparent'};
  background-size: cover;
  background-position: 50% 50%;
  color: var(--text-white);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

const MyText = styled.h3<{ fw?: string; fs?: string; color?: string }>`
  font-size: ${(props) => props.fs || '1rem'};
  font-weight: ${(props) => props.fw || '500'};
  font-size: ${(props) => props.color || 'rgba(255, 255, 255, 0.8)'};
`;

const Flex = styled.div<{
  direction?: string;
  justify?: string;
  align?: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justify || 'center'};
  align-items: ${(props) => props.align || ''};
`;

export { Wrapper, Container, Flex, MyText };
