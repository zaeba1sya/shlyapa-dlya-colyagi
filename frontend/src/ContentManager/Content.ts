import styled from 'styled-components';
import { IWrapperProps } from '../../interfaces/interfaces';

const Wrapper = styled.div`
  width: 100vw;
  height: 97vh;
  background: ${(props: IWrapperProps) =>
    props.image ? props.image : 'transparent'};
  background-size: cover;
  background-position: 86% 80%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props: any) =>
    props.direction ? props.direction : 'row'};
  justify-content: ${(props: any) =>
    props.justify ? props.justify : 'center'};
`;

export { Wrapper, Container, Flex };
