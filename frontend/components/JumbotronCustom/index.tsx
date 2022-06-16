import Image from 'next/image';
import styled from 'styled-components';
import { Wrapper, Container } from '../../src/ContentManager/Content';
import MyLogo from '../../src/UI/MyImage';
import image from '../../public/assets/triangle.png';

const MyText = styled.p<{ fs?: string; fw?: string }>`
  text-align: center;
  font-size: ${(props) => props.fs || '1rem'};
  font-weight: ${(props) => props.fw || 500};
`;

const CenteredBlock = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const JumbotronCustom = (): JSX.Element => {
  return (
    <Wrapper
      image={
        'url("https://i.pinimg.com/originals/d1/cd/66/d1cd66d2391260f1793464203866f94d.png")'
      }
    >
      <CenteredBlock>
        <MyText
          fs="2rem"
          fw="700"
          className="animate__animated animate__fadeIn animate__delay-1s animate__slow"
        >
          <strong>Code Wear</strong>
        </MyText>
        <div style={{ height: '30%', width: '100%' }} />
        <MyText fs="2rem" fw="300" style={{ opacity: '0' }}>
          Clothing store specifically for programmers
        </MyText>
      </CenteredBlock>
    </Wrapper>
  );
};

export default JumbotronCustom;
